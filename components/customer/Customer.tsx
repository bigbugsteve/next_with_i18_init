import React from 'react';
import { Field } from 'redux-form';
import { Row, Col} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import  renderTextField  from '../Form/TextField';
import { required, email } from 'redux-form-validators';

const CustomerForm = (props) => {
    
    const {t} = useTranslation('common');
    
return(
      <Row>
        <Col xs={12} md={6} className="mb-2">
        <div className="from__form-group-label mb-1">{t('customerdata.title')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerNameTitle"
              component={renderTextField}
              type="text"
              //validate={[required({msg:t('errorhandling.reqiured')})]}
              label={t('customerdata.title')}
              disabled
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.first_name')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerFirstName"
              component={renderTextField}
              type="text"
              //validate={[VALIDATIONS.required]}
              label={t('customerdata.first_name')}
              disabled
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.last_name')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerLastName"
              component={renderTextField}
              type="text"
              //validate={[VALIDATIONS.required]}
              label={t('customerdata.last_name')}
              disabled
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.contract_no')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerContractNumber"
              component={renderTextField}
              type="text"
              //validate={[VALIDATIONS.required]}
              label={t('customerdata.contract_no')}
              disabled
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.country')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
               name="customerCountry"
               component={renderTextField}
               type="text"
               //validate={[VALIDATIONS.required]}
               label={t('customerdata.country')}
               disabled
              />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
        <div className="from__form-group-label mb-1">{t('customerdata.email')}</div>
        <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerEmail"
              component={renderTextField}
              type="text"
              validate={[required({msg:t('validations.required')}),email({msg:t('validations.invalid_email')})]}
              label={t('customerdata.email')}
              disabled={props.isDisabled}
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.street_name')}</div>
         <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerAddress"
              component={renderTextField}
              type="text"
              validate={[required({msg:t('validations.required')})]}
              label={t('customerdata.street_name')}
              disabled={props.isDisabled}
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.street_no')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerStreetNumber"
              component={renderTextField}
              type="text"
              validate={[required({msg:t('validations.required')})]}
              label={t('customerdata.street_no')}
              disabled={props.isDisabled}
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.post_code')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerPostCode"
              component={renderTextField}
              type="text"
              validate={[required({msg:t('validations.required')})]}
              label={t('customerdata.post_code')}
              disabled={props.isDisabled}
              />
            </div>
          </div>
          <div className="from__form-group-label mb-1">{t('customerdata.city')}</div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
              name="customerCity"
              component={renderTextField}
              type="text"
              validate={[required({msg:t('validations.required')})]}
              label={t('customerdata.city')}
              disabled={props.isDisabled}
              />
            </div>
          </div>
        </Col>
      </Row>
)}

export default CustomerForm