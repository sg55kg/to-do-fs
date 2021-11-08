import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getLists } from './actions/lists';

const App = () => {
    const dispatch = useDispatch();

    const [showNav, setShowNav] = useState(false);
    const [selectList, setSelectList] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getLists());
    }, [selectList, dispatch])

    return (
        <div className="container">
            <Header setShowNav={setShowNav} showNav={showNav} />
            <Body selectList={selectList} setSelectList={setSelectList}
                showForm={showForm} 
                setShowForm={setShowForm} 
                setShowNav={setShowNav} 
                showNav={showNav}/> 
            <Footer />
        </div>
    )
}

export default App;