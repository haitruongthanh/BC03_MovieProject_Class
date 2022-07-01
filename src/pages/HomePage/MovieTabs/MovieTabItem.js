import React from "react";

export default function MovieTabItem({ movie }) {
  //   console.log("movie: ", movie);
  //   {
  //     "lstLichChieuTheoPhim": [
  //         {
  //             "maLichChieu": 43127,
  //             "maRap": "763",
  //             "tenRap": "Rạp 3",
  //             "ngayChieuGioChieu": "2021-06-18T16:36:00",
  //             "giaVe": 75000
  //         }
  //     ],
  //     "maPhim": 5914,
  //     "tenPhim": "vvvvvtttt",
  //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vvvvvtttt_gp01.png",
  //     "hot": null,
  //     "dangChieu": null,
  //     "sapChieu": null
  // }
  return (
    <div className="flex p-5 border-b border-gray-600 space-x-5">
      <img src={movie.hinhAnh} alt="" className="w-20" />
      <div>
        <p>{movie.tenPhim}</p>
      </div>
    </div>
  );
}
