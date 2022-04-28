import react, { useEffect, useRef, useState } from 'react';
import Total from '../components/total';

const HomePage = (props) => {
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState('');
    const changeTotal = (value) => e => {
        setTotal(total + value);
    }
    const prevTotal = useRef();
    useEffect(() => {
        if(typeof prevTotal.total !== 'undefined' && prevTotal.total !== total) {
            setStatus((prevTotal.total > total) ? 'Decreased' : 'Increased');
        }
        prevTotal.total = total;
    }, [total]);
    return <div>
                <h2>Home</h2>
                <Total data={total} />
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"><button className="btn btn-primary" onClick={changeTotal(-1)}>-</button></li>
                    <li className="list-group-item"><button className="btn btn-primary" onClick={changeTotal(+1)}>+</button></li>
                </ul>
                <h3>{status}</h3>    
            </div>;
}
export default HomePage