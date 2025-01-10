import React, { useState } from 'react';
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../assets/images/Group 74.png';
import Popup from './Popup';
import icon from '../assets/images/Group 78.png';
import iconStar from '../assets/images/Group 79.png';

function SecureYourLegend() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility
    const [popupContent, setPopupContent] = useState({}); // State to store the content (heading and text) for the popup

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };

    const contentData = [
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='id'>
                            <h2>#0001</h2>
                        </div>
                        <div className='name'>
                            <h2>Nizkah</h2>
                            <h4>The Tormentor of Planets</h4>
                        </div>
                        <div className='ultimate'>
                            <h3>Ultimate</h3>
                            <div className='icons'>
                                {/* <i class="fa-regular fa-star"></i> */}
                                {/* <i class="fa-regular fa-star"></i> */}
                                <img src={icon}></img>
                                <img src={iconStar}></img>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Family</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Type</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ascended Celestial</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Status</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Titan</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Group</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Universal Chaos</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Age</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Ancient</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Universe</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Galaxy</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>System</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Planet</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>City</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Death's Embrace</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Family</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Type</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ascended Celestial</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Status</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Titan</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Group</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Universal Chaos</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Age</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Ancient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Universe</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Galaxy</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>System</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Planet</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>City</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Death's Embrace</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    // Function to handle image click
    const handleImageClick = (index) => {
        setPopupContent(contentData[index]); // Store the corresponding heading and text for the clicked image
        setIsPopupOpen(true); // Open the popup
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setIsPopupOpen(false); // Close the popup
        setPopupContent({}); // Clear the content
    };

    return (
        <div id="secure">
            <div className='main-sec'>
                <div className='main'>
                    <div className='secure-header'>
                        <h1>SECURE YOUR LEGEND AND FORGE YOUR STORY</h1>
                        <p>The genesis pack contains 1,200 of the rarest, most powerful and high-quality cards in the Celestial Empires multiverse – here are some of the highlights.</p>
                    </div>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                </div>

                <div className='img-slider'>
                    <Slider {...settings}>
                        {contentData.map((content, index) => (
                            <div className='slides' key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    onClick={() => handleImageClick(index)} // Pass the index of the clicked image
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* Popup component */}
            {isPopupOpen && (
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                    <h2>{popupContent.heading}</h2>
                    <p>{popupContent.text}</p>
                    {popupContent.content}
                </Popup>
            )}
        </div>
    );
}

export default SecureYourLegend;
