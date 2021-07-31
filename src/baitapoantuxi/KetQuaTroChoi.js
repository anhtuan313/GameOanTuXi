import React, { Component } from 'react'
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
            <div className="display-4 text-warning">{this.props.ketQua}</div>
            <div className="display-4 text-success">
              Số bàn thắng: <span className="text-primary">{this.props.soLanThang}</span>
            </div>
            <div className="display-4 text-success">
              Số bàn chơi: <span className="text-primary">{this.props.soLanChoi}</span>
            </div>
          </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      ketQua: state.oanTuXiReducer.ketQua,
      soLanThang: state.oanTuXiReducer.soLanThang,
      soLanChoi: state.oanTuXiReducer.soLanChoi,
    };
  };
  
  export default connect(mapStateToProps)(KetQuaTroChoi);