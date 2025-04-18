import React from "react";
import './sidewall.css';
import { assets } from '../../assets/assets';

const Sidewall = () => {
    return (
        <div className="sidewall">
            <div className="top">
                <img className='menu' src={assets.menu_icon} alt="menu icon" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt=""  />
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">
                        Recent
                    </p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt=""  />
                        <p>What is react...</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottem-item">
                    <img src={assets.question_icon} alt=""  />
                    <p>Help</p>
                </div>
                <div className="recent-entry">
                    <img src={assets.history_icon} alt=""  />
                    <p>Activity</p>
                </div>
                <div className="recent-entry">
                    <img src={assets.setting_icon} alt=""  />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    );
};

export default Sidewall;
