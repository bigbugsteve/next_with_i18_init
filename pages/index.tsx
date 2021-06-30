import Head from 'next/head'
import React, { useEffect, useState, useContext, useRef } from 'react'
import { AuthContext } from '../context/auth/auth.context';
import cookie from 'react-cookies';
import router, { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col  } from 'reactstrap';
import classnames from 'classnames';
import { reduxForm,reset } from 'redux-form';
import { useSelector, useDispatch, useStore } from 'react-redux'
import  RootState  from '../interfaces/RootState';
import { Auth } from '../api/api';
import Countdown from 'react-countdown';
import PhoneNForm2F from '../components/login/PhoneForm2F';
import EmailForm2F from '../components/login/EmailForm2F';
import Calculate from '../components/calculate/Calculate';

const Home = ({handleSubmit, dispatch, pristine, submitting, ...props}) => {
console.log("🚀 ~ file: index.tsx ~ line 18 ~ Home ~ props", props)

    // States

    const [activeTab, setActiveTab] = useState(1);
    const [firstStepCompleted, setFirstStepCompleted]=useState(false);
    const [codeExpired, setCodeExpired] = useState (false);
    const [securityCode, setSecurityCode] = useState('');
    const [counterElement, setCounterElement] = useState (null);
    const [contractPool, setContractPool] = useState([]);
    const [choosenContract, setChoosenContract] = useState(null);
    // const [hasMoreContract, setHasMoreContract] = useState (false);
    // const [contractsView, setContractsView] = useState([]);

    
    // Variables

    const { t } = useTranslation("common");
    const dispatchStore = useDispatch()
    const router = useRouter()
    const { authDispatch } = useContext<any>(AuthContext)
    const getData = useSelector((state: RootState) => state.form.loginform)

    // UseEffects

    useEffect(() => {
        if(choosenContract!=null){
        for(let i=0; i<=contractPool.length; i++){
            if(contractPool[i]?.contract.con_number==choosenContract){
                console.log(contractPool[i]);
                cookie.save('data', `${JSON.stringify(contractPool[i].contract)}`, {path: '/',/*secure:true*/});
                cookie.save('device', `${JSON.stringify(contractPool[i].device)}`, {path: '/',/*secure:true*/});
                authDispatch({ type: 'SIGNIN_SUCCESS' });
                dispatchStore({type:'SET_USER_DATA', val:contractPool[i].contract});
                dispatchStore({type:'SET_DEVICE_DATA', val:contractPool[i].device});
                router.replace("/dashboard");
            }
        }  
    }
    }, [choosenContract]);

    useEffect(() => {
        cookie.remove("token");
        cookie.remove("data");
        dispatch(reset('loginform'));
        authDispatch({ type: 'SIGNED_OUT' });
    }, []);


    // Functions

    const toggle = tab => {
        if(activeTab !== tab && !firstStepCompleted) setActiveTab(tab);
    }

    const chooseContract = (event) =>{
        setChoosenContract(event.currentTarget.dataset.id)
    }

    const securityExpired= () => {
        setCodeExpired(true)
    }

    const login = () => {
        dispatchStore({type: 'SET_LOADER', val: true})
        let loginData;
        if( activeTab === 1 ) {
            loginData = { phoneNumber: getData?.values?.telNumber }
        }
        if( activeTab === 2 ) {
            loginData = { email: getData?.values?.email }
        }
        Auth.login(loginData)
            .then((res) => {
                setSecurityCode(res.data);
                setFirstStepCompleted(true);
                setCounterElement(
                    <React.Fragment>
                        <span className="login__code-expiry">{t('login.code-expires')}:</span>
                            <Countdown 
                                date={Date.now() + 1000*30*10}
                                onComplete={securityExpired}
                                renderer={props => <div className="security__expire">{props.total/1000}</div>}
                            />
                    </React.Fragment>
                )
                props.change("confirmationId", res.data)
            })
            .catch((err) => {
                props.errorhandling('login_errors', err?.response?.status, 'error');
                dispatchStore({type: 'SET_LOADER', val: false})
            })
    }

    const verifyCode = () => {
        dispatchStore({type: 'SET_LOADER', val: true});
        let verifyData;
        if( activeTab === 1 ) {
            verifyData = { phoneNumber: getData.values.telNumber, code: getData.values.confirmationId }
        }
        if( activeTab === 2 ) {
            verifyData = { email: getData?.values?.email, code: getData.values.confirmationId }
        }

        Auth.verifyCode(verifyData)
            .then((res) => {
                if(res?.data.length > 0) {
                    cookie.save('data', `${JSON.stringify(res?.data[0].contract)}`, {path: '/', /* secure:true */})
                    cookie.save('device', `${JSON.stringify(res?.data[0].device)}`, {path: '/', /* secure:true */})
                    router.replace("/dashboard")
                    dispatchStore({type: 'SET_USER_DATA', val: res?.data[0].contract});
                    dispatchStore({type: 'SET_DEVICE_DATA', val: res?.data[0].device});
                    authDispatch({type: 'SIGNIN_SUCCESS' })
                }
                // if(res?.data.length>1) {
                //     setHasMoreContract(true);
                //     setContractPool(res.data);
                //     console.log(res.data);
                //     generateContractsView(res.data)
                // }
                cookie.save('token', `Bearer ${res?.headers?.authorization}`, {path: '/', /* secure:true */})
                dispatchStore({type: 'SET_LOADER', val: false})
                dispatch(reset('loginform'))
            })
            .catch((err) => {
                props.errorhandling('login_errors', err?.response?.status, 'error');
                dispatchStore({type: 'SET_LOADER', val: false});
            })
    }

    // const generateContractsView = (targetArray) =>{
    //     setContractsView(targetArray.map(d => (
    //         <Col sm={12} md={6}  className="mb-4" key={d.contract.con_number}>
    //             <Row className={"login__contract-option-card p-2 m-1"} data-id={d.contract.con_number} onClick={chooseContract}>
    //                 <Col xs={12} md={6}>
    //                     <span className="fw-bold">{t('customerdata.contract_no')}: </span>{d.contract.con_number}
    //                 </Col>
    //                 <Col xs={12} md={6}>
    //                     <div><span className="fw-bold">IMEI: </span>{d.device.imei}</div>
    //                     <div><span className="fw-bold">{t('claim.brand')}: </span>{d.device.brand.brd_name}</div>
    //                     <div><span className="fw-bold">{t('claim.model')}: </span>{d.device.model.name}</div>
    //                 </Col>
    //             </Row>
    //         </Col>
    //     )));
    // }


    const clearLogin = (e) => {
        e.preventDefault();
        dispatch(reset('loginform'));
        setFirstStepCompleted(false);
        setCodeExpired(false);
        setCounterElement(null);
    }


    return (
        <div className="login__mainwrapper">
            <Head>
                <title>Poland Service</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Calculate />
               {props.ssr}
                
            </Container>
        </div>
    );
}

export async function getStaticProps (context) {
    return {
        props: {
            // ssr: "ssr"
        }
        
    }
}

export default reduxForm({
    form: 'loginform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    touchOnBlur: false,
})(Home)