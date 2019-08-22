import React from "react";
import "./Board.css";

import Tile from "../Tile/Tile";

import { Stage, Layer, Text } from "react-konva";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      cursor: {
        x: null,
        y: null
      }
    };
  }
  handleMouseMove = e => {
    var stage = this.stageRef.getStage();
    this.setState({
      cursor: stage.getPointerPosition()
    });
  };
  render() {
    const text = `Cursor position is: ${this.state.cursor.x}, ${
      this.state.cursor.y
    }`;
    return (
      // any tiles that have game pieces on them, let there be adjacent tile slots
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={this.handleMouseMove}
        ref={ref => {
          this.stageRef = ref;
        }}
        offsetX={75}
        offsetY={75}
      >
        <Layer>
          <Tile
            position={{ x: 0, y: 0 }}
            clickable={false}
            options={[[0, 1, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 150, y: 0 }}
            clickable={false}
            options={[[1, 0, 0], [0, 0, 0], [1, 0, 0], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 450, y: 450 }}
            clickable={false}
            options={[[0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 0, y: 150 }}
            clickable={false}
            options={[[0, 0, 1], [0, 0, 0], [0, 0, 1], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 300, y: 300 }}
            clickable={false}
            options={[[1, 1, 0], [0, 0, 0], [1, 1, 0], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 300, y: 450 }}
            clickable={false}
            options={[[1, 0, 1], [0, 0, 0], [1, 0, 1], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 150, y: 150 }}
            clickable={false}
            options={[[0, 1, 1], [0, 0, 0], [0, 1, 1], [0, 0, 0]]}
          />
          <Tile
            position={{ x: 300, y: 150 }}
            clickable={false}
            options={[[1, 1, 1], [0, 0, 0], [1, 1, 1], [0, 0, 0]]}
          />
          <Tile position={{ x: 300, y: 0 }} clickable={true} />
          <Tile position={{ x: 0, y: 300 }} clickable={true} />
          <Tile position={{ x: 150, y: 300 }} clickable={true} />
          <Tile position={{ x: 450, y: 150 }} clickable={true} />
          <Tile position={{ x: 450, y: 300 }} clickable={true} />
          <Tile position={{ x: 600, y: 450 }} clickable={true} />
          <Tile position={{ x: 600, y: 600 }} clickable={true} />
          <Tile position={{ x: 450, y: 600 }} clickable={true} />
          <Text text={text} x={200} y={200} fontSize={20} />
        </Layer>
      </Stage>
    );
  }
}

export default Board;