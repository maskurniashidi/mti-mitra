import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getContentById } from "../../../../utils/Helper";

import "./Application.scss";

const Application = ({ property, content }) => {
  const [activeContent, setActiveContent] = useState();
  const [contentTitle, setContentTitle] = useState();

  const setContent = (pages) => {
    setActiveContent(React.createElement(pages.content));
    setContentTitle(pages.name);
  };

  useEffect(() => {
    setActiveContent(
      React.createElement(getContentById(content, content.defaultPage).content)
    );
    setContentTitle(getContentById(content, content.defaultPage).name);
  }, [content]);

  return (
    <>
      <Navbar />
      <main className="main">
        <Container>
          <Sidebar content={content} setContent={setContent} />
          <div className="content-wrapper">
            <div className="content-header">
              <h4 className="header-title">{contentTitle}</h4>
            </div>
            <section className="content-body">
              {activeContent}
              {/* <div className="page-nav">
                                <Link to="#" className="nav-prev">
                                    <FaArrowLeft/>
                                    Halaman Sebelumnya
                                </Link>
                                <Link to="#" className="nav-next">
                                    Halaman Selanjutnya
                                    <FaArrowRight/>
                                </Link>
                            </div> */}
            </section>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Application;
