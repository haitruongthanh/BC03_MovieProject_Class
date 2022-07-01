import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((res) => {
        console.log(res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // {
  //     "maPhim": 8709,
  //     "tenPhim": "MA TRẬN: HỒI SINH",
  //     "biDanh": "ma-tran-hoi-sinh",
  //     "trailer": "https://www.youtube.com/embed/AT0VjEfeSik",
  //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ma-tran-hoi-sinh_gp01.jpg",
  //     "moTa": "Ma Trận: Hồi Sinh - The Matrix Resurrections 2021 Quay Trở Lại Một Thế Giới Của Hai Thực Tại: Một, Cuộc Sống Hàng Ngày; Khác, Những Gì Nằm Sau Nó. Để Tìm Hiểu Xem Thực Tế Của Anh Ta Có Phải Là Một Công Trình Hay Không, để Thực Sự Hiểu Rõ Bản Thân Mình, Anh Anderson Sẽ Phải Chọn Theo Dõi Con Thỏ Trắng Một Lần Nữa. Ma Trận: Hồi Sinh là phần phim tiếp theo rất được trông đợi của loạt phim “Ma Trận” đình đám, đã góp phần tái định nghĩa thể loại phim khoa học viễn tưởng. Phần phim mới nhất này đón chào sự trở lại của cặp đôi Keanu Reeves và Carrie-Anne Moss với vai diễn biểu tượng đã làm nên tên tuổi của họ, Neo và Trinity. Ngoài ra, phim còn có sự góp mặt của dàn diễn viên đầy tài năng gồm Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, Priyanka Chopra Jonas và Christina Ricci.",
  //     "maNhom": "GP01",
  //     "hot": true,
  //     "dangChieu": true,
  //     "sapChieu": false,
  //     "ngayKhoiChieu": "2022-05-09T15:49:10.787",
  //     "danhGia": 7
  // }
  return (
    <div className="container mx-auto py-10 space-y-10 ">
      <div className="flex items-center space-x-20">
        <img src={movie.hinhAnh} className="w-96 rounded" alt="" />

        <Progress
          type="circle"
          percent={movie.danhGia * 10}
          width={400}
          // className="w-40 h-40"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          strokeWidth={10}
          format={(number) => {
            return <span className="text-blue-700"> {number / 10} điểm</span>;
          }}
        />
      </div>
      <p>{movie.tenPhim}</p>

      <p>{movie.moTa}</p>
    </div>
  );
}
// boilerplate
