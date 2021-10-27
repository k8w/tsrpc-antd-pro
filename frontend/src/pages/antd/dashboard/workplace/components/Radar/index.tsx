import { Col, Row } from 'antd';
import { Axis, Chart, Coord, G2, Geom, Tooltip } from 'bizcharts';
import React, { Component } from 'react';
import autoHeight from './autoHeight';
import styles from './index.less';


export type RadarProps = {
  title?: React.ReactNode;
  height?: number;
  padding?: [number, number, number, number];
  hasLegend?: boolean;
  data: {
    name: string;
    label: string;
    value: string | number;
  }[];
  colors?: string[];
  animate?: boolean;
  forceFit?: boolean;
  tickCount?: number;
  style?: React.CSSProperties;
};
type RadarState = {
  legendData: {
    checked: boolean;
    name: string;
    color: string;
    percent: number;
    value: string;
  }[];
};
/* eslint react/no-danger:0 */
class Radar extends Component<RadarProps, RadarState> {
  state: RadarState = {
    legendData: [],
  };

  chart: G2.Chart | undefined = undefined;

  node: HTMLDivElement | undefined = undefined;

  getG2Instance = (chart: G2.Chart) => {
    this.chart = chart;
  };

  handleRef = (n: HTMLDivElement) => {
    this.node = n;
  };

  handleLegendClick = (
    item: {
      checked: boolean;
      name: string;
    },
    i: string | number,
  ) => {
    const newItem = item;
    newItem.checked = !newItem.checked;

    const { legendData } = this.state;
    legendData[i] = newItem;

    this.setState({
      legendData,
    });
  };

  render() {
    const defaultColors = [
      '#1890FF',
      '#FACC14',
      '#2FC25B',
      '#8543E0',
      '#F04864',
      '#13C2C2',
      '#fa8c16',
      '#a0d911',
    ];

    const {
      data = [],
      height = 0,
      title,
      hasLegend = false,
      forceFit = true,
      tickCount = 5,
      padding = [35, 30, 16, 30] as [number, number, number, number],
      animate = true,
      colors = defaultColors,
    } = this.props;

    const { legendData } = this.state;

    const scale = {
      value: {
        min: 0,
        tickCount,
      },
    };

    const chartHeight = height - (hasLegend ? 80 : 22);

    return (
      <div className={styles.radar} style={{ height }}>
        {title && <h4>{title}</h4>}
        <Chart
          scale={scale}
          height={chartHeight}
          forceFit={forceFit}
          data={data}
          padding={padding}
          animate={animate}
          onGetG2Instance={this.getG2Instance}
        >
          <Tooltip />
          <Coord type="polar" />
          <Axis
            name="label"
            line={undefined}
            tickLine={undefined}
          />
          <Axis
            name="value"
            grid={{
              line: {
                type: 'polygon',
                style: {
                  lineDash: undefined,
                },
              }
            }}
          />
          <Geom type="line" position="label*value" color={['name', colors]} size={1} />
          <Geom
            type="point"
            position="label*value"
            color={['name', colors]}
            shape="circle"
            size={3}
          />
        </Chart>
        {hasLegend && (
          <Row className={styles.legend}>
            {legendData.map((item, i) => (
              <Col
                span={24 / legendData.length}
                key={item.name}
                onClick={() => this.handleLegendClick(item, i)}
              >
                <div className={styles.legendItem}>
                  <p>
                    <span
                      className={styles.dot}
                      style={{
                        backgroundColor: !item.checked ? '#aaa' : item.color,
                      }}
                    />
                    <span>{item.name}</span>
                  </p>
                  <h6>{item.value}</h6>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
  }
}

export default autoHeight()(Radar);
