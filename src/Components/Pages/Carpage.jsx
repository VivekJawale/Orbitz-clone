

import React, { useEffect } from 'react';
import styles from './styles/Carpage.module.css';
import { MdLocationOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetch_cars_data } from '../Redux/Queries/action';

const Carpage = () => {
    const { id } = useParams();

    const dispatch = useDispatch()
    


    useEffect(() => {
        dispatch(fetch_cars_data(id))
    }, [dispatch, id])

    return (
        <div>
            <div style={{ height: "40px", background: "#f5f5f5" }}></div>
            <div>
                <div className={styles.hotel_container}>
                    <div className={styles.upper_div1}>
                        <div>
                            <MdLocationOn fontSize={'28px'} />
                            <input type="text" defaultValue={id} />
                        </div>
                        <div>
                            <div>
                                <div>pick up date</div>
                                <input type="date" name="" id="" defaultValue="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>drop-off date</div>
                                <input type="date" name="" id="" defaultValue="" />
                            </div>
                        </div>
                        <div>
                        <div>
                                <div>pick-up time</div>
                                <input type="time" name="" id="" defaultValue="" />
                            </div>
                        </div>
                        <div>
                        <div>
                                <div>drop-off time</div>
                                <input type="time" name="" id="" defaultValue="" />
                            </div>
                        </div>
                        
                        <div className={styles.stays_saerch}>
                            <button>Search</button>
                        </div>
                    </div>
                    
                </div>
            </div>
          
        </div>
    );
};

export default Carpage;
