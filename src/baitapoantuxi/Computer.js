import React, { Component } from 'react'
import { connect } from "react-redux";
class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 50px;}
            50% {top: -50px;}
            75%{top:  50px;}
            50% {top: 0px;}
    
            
          }`;
        return (
          <div className="text-center playerGame">
            <div className="think">
              <style>{keyframe}</style>
              <img
                style={{
                    
                  position: "absolute",
                  left:"25%",
                  animation: `randomItem${Date.now()} 0.4s`,
                  transform: "rotate(180deg)",
                }}
                className="mt-4"
                width={80}
                height={80}
                src={this.props.computer.hinhAnh}
                alt={this.props.computer.hinhAnh}
              />
            </div>
            <div className="speech-bubble"></div>
            <img
              style={{ width: 150, height: 150 }}
              src="./img/playerComputer.png"
              alt="./img/playerComputer.png"
            />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      computer: state.oanTuXiReducer.computer,
    };
  };
  export default connect(mapStateToProps)(Computer);
  