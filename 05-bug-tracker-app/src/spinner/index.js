import React, { useState } from 'react';

const Spinner = ({ value, up, down, doubleUp, doubleDown }) => {
    const [delta, setDelta] = useState(0);
    return (
        <div>
            <h3>Spinner</h3>
            <hr />
            <div>
                <label>Delta : </label>
                <input type="number" value={delta} onChange={evt => setDelta(evt.target.valueAsNumber)} />
            </div>
            <input type="button" value="DOWN" onClick={() => down(delta)} />
            <span> [ {value} ] </span>
            <input type="button" value="UP" onClick={() => up(delta)} />
            <br />
            <input type="button" value="DOUBLE DOWN" onClick={doubleDown} />
            <input type="button" value="DOUBLE UP" onClick={doubleUp} />
        </div>
    );
};

export default Spinner;