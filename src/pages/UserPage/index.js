
import { useEffect } from 'react'
import DataList from "../../assets/data.json"

import Lottie from 'react-lottie';
import * as animationData from '../../assets/heart-animation-73585.json'

import moment from 'moment'
import _ from 'lodash'
import Footer from '../../components/Footer'


import MyHelmet from '../../components/MyHelmet';

import Timer from '../../components/Countdown/Timer'

import NotFound from '../NotFound'

import 'moment/locale/tr'

export default function index({ match }) {
    //locale
    //moment().locale('tr')

    const { username } = match.params

    const findedUser = _.find(DataList.users, { username })

    if (!findedUser) {
        return (<NotFound />)
    }

    const {
        coverImage,
        mr,
        mrs,
        title,
        description,
        homeImages,
        place,
        startDate
    } = findedUser


    return (
        <div id="wrapper2" className="clearfix">
            <MyHelmet title={title} description={description} />
            <div id="most-toppest" />
            <section id="slider" className="slider-element slider-parallax min-vh-60 min-vh-md-100 page-section dark">
                <div style={{ background: `url(${coverImage}) center center`, backgroundSize: 'cover' }} className="slider-inner">
                    <div className="flexslider">
                        <div className="slider-wrap">
                            <div className="slide" style={{ background: `url(${coverImage}) center center`, backgroundSize: 'cover' }} />
                        </div>
                    </div>
                    <div className="vertical-middle">
                        <div className="container-fluid dark text-center py-5">
                            <div className="wedding-head clearfix">
                                <div className="first-name">
                                    {mrs.name}
                                    <span>
                                        {mrs.surname}
                                    </span></div>
                                <div className="and">&amp;</div>
                                <div className="last-name">
                                    {mr.name}
                                    <span>
                                        {mr.surname}
                                    </span></div>
                            </div>
                            <div className="divider divider-sm divider-center">
                                <img style={{ height: 50 }} src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/red-heart_2764-fe0f.png" />
                            </div>
                            <p className="lead">Düğünümüze  <strong>Kalan </strong> Zaman:</p>

                            <Timer deadline={startDate} />
                        </div>
                    </div>
                    <a href="#" data-scrollto="#section-couple" className="one-page-arrow">
                        <i className="icon-angle-down infinite animated fadeInDown" />
                    </a>
                </div>
            </section>

            <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <div className="clear" />
                        <div className="clear" />
                        <div id="section-events" className="heading-block text-center topmargin-lg page-section">
                            <h2>{title}</h2>
                            <span>
                                {description}
                            </span>
                        </div>
                        <div className="row justify-content-center col-mb-50">
                            {
                                homeImages.map((v, i) => (
                                    <div key={i} className="col-sm-6 col-lg-4">
                                        <div className="feature-box text-center media-box fbox-bg">
                                            <div className="fbox-media">
                                                <img src={v} alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div id="section-locations" className="heading-block text-center topmargin-lg page-section">
                            <h5 style={{ fontWeight: 'normal' }} title={moment(startDate).fromNow()}>
                                Tarih:
                                {
                                    ` ${moment(startDate).format("DD.MM.YYYY HH:mm")} ${moment(startDate).format("dddd")}`
                                }

                            </h5>
                            <h2>{place.title}</h2>
                            <span>
                                {place.fullAddress}
                            </span>
                            <div style={{ paddingTop: 10 }}>
                                <a className="button5" href={place.yandexLink}
                                    style={{ fontSize: '30px', padding: 5, color: '#fff', borderRadius: 5 }}>
                                    {`👉 `} Yol Tarifi ve Navigasyon
                                </a>
                            </div>

                        </div>
                    </div>
                    {/* <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a href="https://yandex.com.tr/harita/org/lemar_dugun_salonlari/238447529399/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                            Lemar Düğün Salonları</a>
                        <iframe src="https://yandex.com.tr/map-widget/v1/-/CCUij4u9OA" width={560} height={400} frameBorder={1} allowFullScreen={true} style={{ position: 'relative' }} />
                    </div> */}
                </div>
            </section>

            <Footer />
        </div>
    );
}
