import React from 'react';
import { Field } from 'redux-form';
import { Row, Col} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import  renderTextField  from '../Form/TextField';
import { required, email } from 'redux-form-validators';

const EmailForm2F = (props) => {
    const {t} = useTranslation('common');
return(
    <Row className="mt-3">
    <Col xs={12} className="mb-2">
    <div className="from__form-group-label mb-1">{t('login.guide_mail')}</div>
      <div className="form__form-group mb-0">
        <div className="form__form-group-field">
        <Field
           name="emailAddress"
           component={renderTextField}
           type="text"
           label={t('login.tel_number')}
           validate={[required({msg:t('validations.required')}),email({msg:t('validations.invalid_email')})]}
           disabled={props.isFirstStepComplete}
         />
        </div>
      </div>
      {props.isFirstStepComplete && <React.Fragment>
      <div className="from__form-group-label mb-1">{t('login.security_code_warning_email')}</div>
           <div className="form__form-group">
             <div className="form__form-group-field">
               <Field
               name="confirmationId"
               component={renderTextField}
               type="text"
               label = {t('login.security_code')}
               validate={[required({msg:t('validations.required')})]}
               disabled = {props.isDisabled}
               />
            </div>
      </div>
      </React.Fragment>
      }
    </Col>
  </Row>
)}

export default EmailForm2F