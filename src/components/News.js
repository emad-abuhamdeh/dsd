/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "Stack Overflow reveals UK top 10 best-paid developer roles",
    img: "img/news/1.jpg",
    tag: "Branding",
    des: [
      "Leading the pack are developers in senior executive roles, enjoying an average salary of £128,200 ($155,173). Notably, these professionals experienced a significant 30 percent increase in their salaries between 2022 and 2023, reflecting the industry’s robust growth. Following closely are engineering managers, earning an average of around £97,500 ($117,900), showcasing the high demand for managerial expertise in the tech sector. Cloud infrastructure engineers The third position is secured by cloud infrastructure engineers, a role witnessing substantial growth in recent years. With an average salary of approximately £87,000 ($105,517), these professionals play a pivotal role in the industry’s future. Interestingly, this figure represents a five percent increase from Stack Overflow’s 2022 Developer Survey. Globally, salaries for this role skyrocketed by an impressive 17 percent since 2022. Mobile developers and DevOps specialists Mobile developers claimed the fourth spot, with their salaries surging by 13 percent from £72,700 ($87,948) in 2022 to £82,000 ($99,311) in 2023. This increase echoes a global trend, with salaries for mobile developers soaring by 21 percent worldwide. DevOps specialists followed closely, earning an average of around £77,000 ($93,104)—marking a three percent increase from the previous year. Specialists in AI and machine learning Amidst the AI and machine learning revolution, data scientists and ML specialists saw a six percent increase in their average salary—reaching approximately £71,800 ($86,897) per annum. Their crucial role in advancing technology and innovation continues to be highly rewarded in the job market. Diverse roles, varied salaries The list also includes back-end developers, game or graphics developers, and data engineers—each contributing significantly to the tech ecosystem. However, it’s noteworthy that data engineers witnessed a 20 percent decrease in salaries from the previous year, averaging around £66,700 ($80,690) per annum",
    ],
  },
  {
    title: "Apple plans to upgrade search capabilities with Pegasus",
    img: "img/news/2.jpg",
    tag: "Design",
    des: [
      "Apple is reportedly looking to integrate its “Pegasus” internal search engine into the App Store and other applications The report comes via Apple insider Mark Gurman in his latest Power On newsletter for Bloomberg Apple’s venture into advanced search technology began with the introduction of upgrades to its Spotlight search feature in iOS 14 and iPadOS 14. This enhanced feature enabled users to search for web results, documents, and surface details from apps Former Google executive John Giannandrea is spearheading Apple’s search team, aiming to deeply embed the Pegasus search engine into iOS and macOS. Sources suggest that Apple might even employ generative AI to enhance this engine further.An essential component of Apple’s strategy is Business Connect, a tool introduced last year to augment its information database. By collecting comprehensive details about businesses operating hours and locations, Apple bolstered its competitive edge against search giant Google Apple’s robust App Store ads business – serving ads to apps like Apple News and Weather – adds another layer to its growing search ecosystem However, the question lingers: will Apple venture fully into the fiercely competitive realm of search engines dominated by Google? Eddy Cue, a prominent Apple executive, has previously expressed his view that Apple doesn’t need to create its search engine. Moreover, reports indicate that Apple declined an offer to acquire Bing in 2020.While nothing is final until we hear from Apple itself, “Pegasus” could be what’s needed to finally challenge Google’s search supremacy and meaningfully disrupt the arena..",
    ],
  },
  {
    title: "Electron framework adds encryption API",
    img: "img/news/3.jpg",
    tag: "Media",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Sentry for JavaScript monitors release health",
    img: "img/news/4.jpg",
    tag: "Technology",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Five reasons to begin a Packt subscription",
    img: "img/news/5.jpg",
    tag: "Lifestyle",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Why developers are so divided over WordPress",
    img: "img/news/6.jpg",
    tag: "Modern",
    des: [
      "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">News</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
