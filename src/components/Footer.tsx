import React, { useEffect, useState } from "react";
import { listCandidate } from "../api/home";

type Props = {};

const Footer = (props: Props) => {
  const [candidate, setCandidate] = useState<any>([]);
  useEffect(() => {
    const getCandidate = async () => {
      const { data } = await listCandidate();
      console.log(data);

      setCandidate(data);
    };
    getCandidate();
    // console.log(getCandidate());
  }, []);
  return (
    <div>
      <div>
        <div className="container-fluid job-support-wrapper">
          <div className="container-fluid job-support-wrap">
            <div className="container job-support">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-12">
                  <ul className="spp-list">
                    <li>
                      <span>
                        <i className="fa fa-question-circle pr-2 icsp" />
                        Hỗ trợ nhà tuyển dụng:
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-phone pr-2 icsp" />
                        0383850402
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  <div className="newsletter">
                    <span className="txt6">Đăng ký nhận bản tin việc làm</span>
                    <div className="input-group frm1">
                      <input
                        type="text"
                        placeholder="Nhập email của bạn"
                        className="newsletter-email form-control"
                      />
                      <a href="#" className="input-group-addon">
                        <i className="fa fa-lg fa-envelope-o colorb" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-wrap  clear-left clear-right">
          <div className="container footer">
            <div className="row">
              <div className="col-md-4 col-sm-8 col-12">
                <ul className="footer-contact">
                  <li>
                    <a href="#">
                      <i className="fa fa-phone fticn" /> +0383850402
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope fticn" />
                      ConNguoiHoaThanhQue@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker fticn" />
                      Số Nem chua - Huyện Hoa Thanh Quế 
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-4 col-12">
                <h2 className="footer-heading">
                  <span>Ngôn ngữ nổi bật</span>
                </h2>
                <ul className="footer-list">
                  {candidate.skill?.map((item: any) => {
                    return (
                      <li key={item.id}>
                        <a key={item.id}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-12">
                <h2 className="footer-heading">
                  <span>Tất cả ngành nghề</span>
                </h2>
                <ul className="footer-list">
                  {candidate.profession?.map((item: any) => {
                    return (
                      <li key={item.id}>
                        <a key={item.id}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-12">
                <h2 className="footer-heading">
                  <span>Tất cả hình thức</span>
                </h2>
                <ul className="footer-list">
                  <li>
                    <a href="#">Nhân viên chính thức</a>
                  </li>
                  <li>
                    <a href="#">Nhân viên bán thời gian</a>
                  </li>
                  <li>
                    <a href="#">Freelancer</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-12 col-12">
                <h2 className="footer-heading">
                  <span>Tất cả tỉnh thành</span>
                </h2>
                <ul className="footer-list">
                  <li>
                    <a href="#">Hồ Chính Minh</a>
                  </li>
                  <li>
                    <a href="#">Hà Nội</a>
                  </li>
                  <li>
                    <a href="#">Đà Nẵng</a>
                  </li>
                  <li>
                    <a href="#">Buôn Ma Thuột</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
