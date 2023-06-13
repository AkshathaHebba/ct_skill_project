import React from 'react';
import Header from "../../components/Header";
import PageBackground from "../../components/PageBackground";
import Carousel from "../../components/Carousel";
import TabView from "../../components/TabView";
import ScheduleTable from "../../components/ScheduleTable";
import CarasolImage from "../../images/Carasol Image.png";
import HeaderLogo1 from "../../images/HeaderLogo1.png";
import Footer from "../../components/Footer";
import styles from './About.module.css';

const TabViewContent = ({events}) => {
    return (
        <div className={styles.TabViewContent__Container}>
            <ScheduleTable className={styles.TabViewContent__ScheduleTable} events={events}/>
        </div>
    )
}

const About = () => {
    const carouselImages = [CarasolImage, CarasolImage, CarasolImage, HeaderLogo1, HeaderLogo1, HeaderLogo1, CarasolImage, CarasolImage, CarasolImage, CarasolImage];
    return (
        <>
            <Header inverted/>
            <PageBackground imageName={'Hero2'}>
                <div className={styles.About__ContentContainer}>
                    <div className={styles.About__HeadingContainer}>
                        <div>
                            <h1 className={styles.About__HeadingText} id={"history"}>History</h1>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <Carousel images={carouselImages}/>
                </div>
            </PageBackground>
            <div className={styles.About__ClimbHeadingContainer}>
                <div className={styles.About__ClimbHeadingTextContainer}>
                    <h1 className={styles.About__HeadingText} id={"climb"}>Climb</h1>
                </div>
                <div>
                    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Eget sit amet tellus cras
                    adipiscing enim eu turpis. Aliquam ultrices sagittis orci a scelerisque purus semper.
                </div>
            </div>
            <PageBackground imageName={'Hero3'} imageHeight={'50%'}>
                <div className={styles.About__ContentContainer}>
                    <TabView tabs={[{
                        tabName: 'Mountain 1',
                        tabContent: <TabViewContent events={[{date: '10-10-2023', name: 'Vertobuli Viverra'}, {
                            date: '11-10-2013',
                            name: 'Vertobuli Viverra'
                        }]}/>
                    }, {tabName: 'Mountain 2', tabContent:
                            <TabViewContent events={[{date: '11-10-2021', name: 'Aertobuli Civerra'}, {
                                date:'11-09-2010',
                                name:'tergs Aertobuli'
                            }, {date:'10-10-2023', name: 'isdyybsd Viverra'}]}/>
                    }]}/>
                </div>
            </PageBackground>
            <Footer/>
        </>
    );
};

export default About;