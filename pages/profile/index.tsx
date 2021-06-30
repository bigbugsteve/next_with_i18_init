import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomerForm from "../../components/customer/Customer";
import { Container, Row, Col, Button } from "reactstrap";
import { reduxForm } from "redux-form";
import { useTranslation } from "react-i18next";
import cookie from "react-cookies";
import RootState from "../../interfaces/RootState";
import { User } from "../../api/api";
import { SafeHydrate } from "../../components/helper/SafeHydrate";

const Customer = ({ handleSubmit, submitting, pristine, ...props }) => {

    // Variables
    const { t } = useTranslation("common");
    const userData = useSelector((state: RootState) => state.user.userData);
    console.log("🚀 ~ file: index.tsx ~ line 16 ~ Customer ~ userData", userData)
    const getData = useSelector((state: RootState) => state.form.customermodify);
    const dispatchStore = useDispatch();

    // Functions
    const updateCustomerData = () => {
        dispatchStore({ type: "SET_LOADER", val: true });
        let payLoad = {
            partnerId: userData.prt_id,
            contractNumber: userData.con_number,
            email: getData.values?.customerEmail,
            postcode: getData.values?.customerPostCode,
            city: getData.values?.customerCity,
            street: getData.values?.customerAddress,
            streetNumber: getData.values?.customerStreetNumber,
            username: "OPTIE1_WEB",
        };
        User.userUpdate(cookie.load("token"), payLoad)
            .then((res) => {
                cookie.remove("data", { path: "/" });
                cookie.save("data", `${JSON.stringify(res?.data)}`, {
                    path: "/" /*secure:true*/,
                });
                dispatchStore({ type: "SET_USER_DATA", val: res?.data });
                dispatchStore({ type: "SET_LOADER", val: false });
                props.errorhandling("customer_errors", res?.status, "success");
            })
            .catch((err) => {
                props.errorhandling(
                    "customer_errors",
                    err?.response?.status,
                    "error"
                );
                dispatchStore({ type: "SET_LOADER", val: false });
            });
    };

    // UseEffects    
    useEffect(() => {
        props.change("customerNameTitle", userData.title);
        props.change("customerFirstName", userData.firstname);
        props.change("customerLastName", userData.lastname);
        props.change("customerEmail", userData.email);
        props.change("customerContractNumber", userData.con_number);
        props.change("customerStreetNumber", userData.streetnum);
        props.change("customerAddress", userData.street);
        props.change("customerPostCode", userData.postcode);
        props.change("customerCity", userData.city);
    }, []);


    return (
        <SafeHydrate>
            <div className="profile__mainwrapper w-100">
                <Container>
                    <form
                        className="form"
                        onSubmit={handleSubmit(() => updateCustomerData())}
                    >
                        <Col className="claim__main-title">
                            <h1 className="py-3">
                                {t("customerdata.your_details")}
                            </h1>
                        </Col>
                        <CustomerForm />
                        <Row>
                            <Col
                                xs={12}
                                className="mt-3 mb-5 d-flex justify-content-end"
                            >
                                <Button
                                    disabled={pristine || submitting}
                                    className="btn__primary"
                                    type="submit"
                                >
                                    {t("customerdata.save")}
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </SafeHydrate>
    );
};

export default reduxForm({
    form: "customermodify",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    touchOnBlur: false,
})(Customer);
