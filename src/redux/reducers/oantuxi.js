const stateDefault = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/keo.png",
      datCuoc: true,
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao.png",
      datCuoc: false,
    },
  ],
  ketQua: "I'm iron man,I love you 3 thousands",
  soLanThang: 0,
  soLanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
};
const oanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON": {
      let mangDatCuoc = [...state.mangDatCuoc];
      mangDatCuoc = mangDatCuoc.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = mangDatCuoc.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangDatCuoc[index].datCuoc = true;
      }
      state.mangDatCuoc = mangDatCuoc;
      return { ...state };
    }

    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let mangCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = mangCuocNgauNhien;

      return { ...state };
    }
    case "END": {
      
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo": {
          if (computer.ma === "keo") {
            state.ketQua = "Draw!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua sml!!!";
          } else {
            state.ketQua = "I'm iron man,I love you 3 thousands!";
            state.soLanThang += 1;
          }
          break;
        }
        case "bua": {
          if (computer.ma === "keo") {
            state.ketQua = "I'm iron man, I love you 3 thousands!";
            state.soLanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Draw!!!";
          } else {
            state.ketQua = "Thua sml!!!";
          }
          break;
        }
        case "bao": {
          if (computer.ma === "keo") {
            state.ketQua = "Thua sml!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "I'm iron man, I love you 3 thousands!";
            state.soLanThang += 1;
          } else {
            state.ketQua = "Draw!!!";
          }
          break;
        }
        default:
          state.soLanThang += 1;
          state.ketQua = "I'm iron man, I love you 3 thousands!";
      }
    }
    state.soLanChoi += 1
    default:
      return { ...state };
  }
};
export default oanTuXiReducer;
