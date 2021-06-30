import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { reduxForm,reset, Field } from 'redux-form';
import SelectField from "../../components/Form/Select";
import renderRadioButtonField from "../../components/Form/RadioButton";
import RootState from '../../interfaces/RootState';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

const Calculate = ({handleSubmit, ...props}) => {

    // States
    const [ showModal, setShowModal ] = useState(false)
    // Variables
    const claimStore = useSelector((state: RootState) => state.form.calculationform)
    const chosenClaimType = claimStore && claimStore.values && claimStore.values.warrantyType
    const chosenDamageType = claimStore && claimStore.values && claimStore.values.damageType
    const { t } = useTranslation('common')
    
    const options = [
        { value: 'samsung', label: 'Samsung' }        
    ]
    

    // Components
    const Estimation = () => {
        if (chosenClaimType === 100) return null
        if (chosenDamageType === 5) return null
        return (
            <div className="estimation">
                <h2 className="estimation__title">
                    {t('home.estimation')}:
                </h2>
            </div>
        )
    }

    // Functions 
    const handleEstimate = async () => {

    }

    const submitForm = () => {
        setShowModal(true)
    }

    const handleBrandSelect = (e) => {

    }
    return (
        <div className="calculation">
            <h1>{t('home.calculate_title')}</h1>
            {/* Calculation form */}
            <form className="calculation__form form flex__container" onSubmit={handleSubmit}>
            
                {/* Brand & Model */}
                <Row className="d-flex justify-content-around my-5">
                    <h2>{t('home.brand_title')}</h2>
                    <Col xs={12} lg={4} className={`px-0 py-0 mx-2`}>
                        <Field name="brand" component="select" className="form-select">
                            <option>Choose</option>
                            <option value="samsung">Samsung</option>
                        </Field>
                    </Col>
                    <Col xs={12} lg={4} className={`px-0 py-0 mx-2`}>
                        <Field name="model" component="select" className="form-select">
                            <option>Choose</option>
                            <option value="galaxy-s">Galaxy S</option>
                            <option value="galaxy-m">Galaxy M</option>
                            <option value="galaxy-l">Galaxy L</option>
                            <option value="galaxy-xl">Galaxy XL</option>
                        </Field>
                    </Col>

                </Row>

                {/* Damage type */}
                <Row className="claim__claimtype-container my-5">
                    <h2>{t('home.damage_title')}</h2>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenDamageType === 1 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="damageType"
                                    component={renderRadioButtonField}
                                    label={t("home.screen")}
                                    radioValue={1}
                                    className="button"
                                    // defaultChecked={chosenClaimType !== 200 ? true : false}
                                    icon="/screen.png"
                                    />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenDamageType === 2 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="damageType"
                                    component={renderRadioButtonField}
                                    label={t("home.battery")}
                                    radioValue={2}
                                    className="button"
                                    icon="/battery.png"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenDamageType === 3 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="damageType"
                                    component={renderRadioButtonField}
                                    label={t("home.charging")}
                                    radioValue={3}
                                    className="button"
                                    icon="/charging.png"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenDamageType === 4 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="damageType"
                                    component={renderRadioButtonField}
                                    label={t("home.back_cover")}
                                    radioValue={4}
                                    className="button"
                                    icon="/back_cover.png"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenDamageType === 5 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="damageType"
                                    component={renderRadioButtonField}
                                    label={t("home.other")}
                                    radioValue={5}
                                    className="button"
                                    icon="/other_damage.png"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Warranty type */}
                <Row className="claim__claimtype-container my-5">
                    <h2>{t('home.warranty_title')}</h2>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenClaimType === 100 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="warrantyType"
                                    component={renderRadioButtonField}
                                    label={t("home.warranty")}
                                    radioValue={100}
                                    className="button"
                                    defaultChecked={chosenClaimType !== 200 ? true : false}
                                    icon="/warranty-icon.png"
                                    />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2} className={`${chosenClaimType === 200 && 'checked'} radio__icon-with px-0 py-0 mx-2`}>
                        <div className="form__form-group radiobutton__icon h-100 w-100">
                            <div className="form__form-group-field radio__icon-field">
                                <Field
                                    name="warrantyType"
                                    component={renderRadioButtonField}
                                    label={t("home.post_warranty")}
                                    radioValue={200}
                                    className="button"
                                    icon="/post-warranty-icon.png"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button buttonName="Calculate" classes="btn-black" onClick={handleEstimate} 
                            disabled={chosenDamageType === 5 || chosenClaimType == 100}
                        />
                    </Col>
                    <Col className="text-center">
                        <Button buttonName="Next" classes="btn-black" onClick={submitForm} />
                    </Col>
                </Row>
                {showModal &&
                <Modal> kutya</Modal>
                }
            </form>
            {/* Estimation */}
            <Estimation />
        </div>
    )
}

export default reduxForm({
    form: 'calculationform',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    touchOnBlur: false,
})(Calculate)
