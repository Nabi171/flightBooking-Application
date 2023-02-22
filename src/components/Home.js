import React, { useState } from 'react';
import Header from './Header';
import AddedData from './AddedData';
import { useSelector, useDispatch, connect } from 'react-redux';
import { book, addOptions, addOptions2, addOptions3, addOptions4, addOptions5 } from '../Redux/detailcounter/actions';

const Home = () => {
    const dispatch = useDispatch();
    // const [selectedOption, setSelectedOption] = useState('Dhaka');
    // const [selectedOption2, setSelectedOption2] = useState('Dhaka');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('1');
    const [selectedOption5, setSelectedOption5] = useState('Business');
    const [newcom, setcom] = useState([])
    // const [selectedOption, setSelectedOption] = useState('Dhaka');

    const handleOptionChange = (e) => {
        // setSelectedOption(e.target.value);
        const selectedOption = e.target.value;
        dispatch(addOptions(selectedOption));
        // this.props.addOptions(selectedOption);

    }
    const handleOptionChange2 = (e) => {
        // setSelectedOption(e.target.value);
        const selectedOption = e.target.value;
        dispatch(addOptions2(selectedOption));
        // this.props.addOptions(selectedOption);

    }
    const handleOptionChange3 = (e) => {
        // setSelectedOption(e.target.value);
        const selectedOption = e.target.value;
        dispatch(addOptions3(selectedOption));
        // this.props.addOptions(selectedOption);

    }
    const handleOptionChange4 = (e) => {
        // setSelectedOption(e.target.value);
        const selectedOption = e.target.value;
        dispatch(addOptions4(selectedOption));
        // this.props.addOptions(selectedOption);

    }
    const handleOptionChange5 = (e) => {
        // setSelectedOption(e.target.value);
        const selectedOption = e.target.value;
        dispatch(addOptions5(selectedOption));
        // this.props.addOptions(selectedOption);

    }
    // const handleOptionChange2 = (e) => {
    //     setSelectedOption2(e.target.value);
    // }
    // const handleOptionChange3 = (e) => {
    //     setSelectedOption3(e.target.value);
    // }
    // const handleOptionChange4 = (e) => {
    //     setSelectedOption4(e.target.value);
    // }
    // const handleOptionChange5 = (e) => {
    //     setSelectedOption5(e.target.value);
    // }

    const addrows = () => {
        setcom([...newcom, {}]);
    }

    const handleSubmit = (e) => {
        // console.log(selectedOption);
        // console.log(selectedOption2);
        // console.log(selectedOption3);
        // console.log(selectedOption4);
        // console.log(selectedOption5);
        // setSelectedOption(e.target.value);

        e.preventDefault();
    }

    // const data = useSelector((state) => state.data)
    // const dispatch = useDispatch();
    return (
        <div>
            <section>
                {/* <!-- Input Data --> */}
                <div class="mt-[160px] mx-4 md:mt-[160px] relative">
                    <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
                        <form
                            onSubmit={handleSubmit}
                            class="first-hero lws-inputform">
                            {/* <!-- From --> */}
                            <div class="des-from">
                                <p>Destination From</p>
                                <div class="flex flex-row">
                                    <img src="./img/icons/Frame.svg" alt="" />
                                    <select
                                        // onChange={addOptions}
                                        onChange={handleOptionChange}
                                        class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                        <option value="Dhaka" hidden>Please Select</option>
                                        <option>Dhaka</option>
                                        <option>Sylhet</option>
                                        <option>Saidpur</option>
                                        <option>Cox's Bazar</option>
                                    </select>
                                </div>
                            </div>

                            {/* <!-- To --> */}
                            <div class="des-from">
                                <p>Destination To</p>
                                <div class="flex flex-row">
                                    <img src="./img/icons/Frame.svg" alt="" />
                                    <select
                                        onChange={handleOptionChange2}
                                        class="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                                        <option value="Dhaka" hidden>Please Select</option>
                                        <option>Dhaka</option>
                                        <option>Sylhet</option>
                                        <option>Saidpur</option>
                                        <option>Cox's Bazar</option>
                                    </select>
                                </div>
                            </div>

                            {/* <!-- Date --> */}
                            <div class="des-from">
                                <p>Journey Date</p>
                                <input type="date"
                                    onChange={handleOptionChange3}
                                    class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                            </div>

                            {/* <!-- Guests --> */}
                            <div class="des-from">
                                <p>Guests</p>
                                <div class="flex flex-row">
                                    <img src="./img/icons/Vector (1).svg" alt="" />
                                    <select
                                        onChange={handleOptionChange4}
                                        class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                        <option value="2"
                                            hidden>Please Select</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 Persons</option>
                                        <option value="3">3 Persons</option>
                                        <option value="4">4 Persons</option>
                                    </select>
                                </div>
                            </div>

                            {/* <!-- Class --> */}
                            <div class="des-from !border-r-0">
                                <p>Class</p>
                                <div class="flex flex-row">
                                    <img src="./img/icons/Vector (3).svg" alt="" />
                                    <select
                                        onChange={handleOptionChange5}
                                        class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                                        <option value="" hidden>Please Select</option>
                                        <option>Business</option>
                                        <option>Economy</option>
                                    </select>
                                </div>
                            </div>

                            <button class="addCity" type="submit" id="lws-addCity"
                                onClick={addrows}
                            >
                                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">

                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span class="text-sm">Book</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div id='new-section' >

                </div>
                {
                    newcom.map(nc => <AddedData
                    // selectedOption={selectedOption}
                    // selectedOption2={selectedOption2}
                    // selectedOption3={selectedOption3}
                    // selectedOption4={selectedOption4}
                    // selectedOption5={selectedOption5}
                    ></AddedData>)
                }
                {/* <!-- Preview Data --> */}

            </section>

        </div>
    );
};


// const mapStateToProps = (state) => {
//     return {
//         // count: state.value,
//         selectedOption: state.value,
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // increment: (value) => dispatch(increment(value)),
//         // decrement: (value) => dispatch(decrement(value)),
//         addOptions: (value) => dispatch(addOptions(value)),
//     };
// };



// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;