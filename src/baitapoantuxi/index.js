import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import { connect } from "react-redux";
 class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi"> 
                
                <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>

          <div className="col-4">
            <KetQuaTroChoi />
            <button onClick={()=>{this.props.playGame()}} className="btn btn-success p-3 display-4 mt-2">PLAY GAME</button>
          </div>

          <div className="col-4">
            <Computer />
          </div>
        </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      playGame: ()=>{
        let count = 0;
        let randomComputer = setInterval(() => {
          let soNgauNhien = Math.floor(Math.random()*3)
          dispatch({
            type: "RANDOM",
            soNgauNhien
          })
          count ++;
          if (count > 10){
            clearInterval(randomComputer)
            dispatch({
              type: "END"
            })
          }
        }, 100);
        
      }
    }
  }
  export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)