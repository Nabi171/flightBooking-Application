import React from 'react';
import AddedData from './AddedData';
import { useSelector, useDispatch } from 'react-redux';
import { addOptions, addOptions2, addOptions3, addOptions4, addOptions5, addrows } from '../Redux/detailcounter/actions';

const Home = () => {

    const dispatch = useDispatch();
    const handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        dispatch(addOptions(selectedOption));
    }

    const handleOptionChange2 = (e) => {
        const selectedOption = e.target.value;
        dispatch(addOptions2(selectedOption));
    }

    const handleOptionChange3 = (e) => {
        const selectedOption = e.target.value;
        dispatch(addOptions3(selectedOption));

    }

    const handleOptionChange4 = (e) => {
        const selectedOption = e.target.value;
        dispatch(addOptions4(selectedOption));
    }
    const handleOptionChange5 = (e) => {
        // setSelectedOption(e.target.value);
        const selectedOption = e.target.value;
        dispatch(addOptions5(selectedOption));
        // this.props.addOptions(selectedOption);

    }

    const rows = useSelector(state => state.rows)
    const handleAddRow = (row) => {
        dispatch(addrows(row));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
    }


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
                                // onClick={addrows}
                                onClick={handleAddRow}
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
                    rows.map(nc => <AddedData

                    ></AddedData>)
                }
                {/* <!-- Preview Data --> */}

            </section>

        </div>
    );
};






export default Home;