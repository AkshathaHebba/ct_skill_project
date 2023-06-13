import React, {useState} from 'react';
import cs from 'classnames'

import styles from './TabView.module.css';

// const tab = {
//     tabName:
// }

const TabView = ({ tabs }) => {
    const [ activeTabIndex, setActiveIndex] = useState(0);
    // const
    return (
        <div className={styles.TabView__Container}>
            <div className={styles.TabView__TabsContainer}>
                <div className={styles.TabView__TabsInnerContainer}>
                    {
                        tabs.map((tab, index) => (
                            <div onClick={() => setActiveIndex(index)} className={cs(styles.TabView__Tabs, index === activeTabIndex && styles['TabView__Tabs--active'])}>
                                {tab.tabName}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.TabView__ActiveTabContentContainer}>
                {tabs[activeTabIndex].tabContent}
            </div>
        </div>
    );
};

export default TabView;