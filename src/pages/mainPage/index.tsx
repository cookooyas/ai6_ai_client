import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/Context';
import LoginModal from '../../components/main/LoginModal';
import VideoContainer from '../../components/main/VideoContainer';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const { state } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isClicked && state.userState.login) {
            navigate('/mode');
            return;
        }
    }, [isClicked]);

    return (
        <div>
            {/* <LoadingView loading={loadingScreen}></LoadingView> */}
            <VideoContainer setIsClicked={setIsClicked} isClicked={isClicked}></VideoContainer>
            {isClicked && <LoginModal setIsClicked={setIsClicked} />}
        </div>
    );
};

export default MainPage;
