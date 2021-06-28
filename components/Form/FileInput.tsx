// @ts-ignore
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

type fileInputProps = {
    name:string;
    id: string;
    onChange: any;
    value?:any;
    container?:any
}

type inputFieldProps = {
    input?:any;
    meta?:any;
}

export const FileInputField:React.FC<fileInputProps> = ({ onChange, name, value, container }) => {

    const {t} = useTranslation('common')
  const handleChange = (e) => {
    e.preventDefault();
    const files = [...e.target.files];
    onChange({ file: files[0], name: files[0].name });
  };

  return (
    <div className="form__form-group-file">
       <div id={`${container}`} className="file__placeholder">
                    {value?<span>{value.name}</span>: t('claim.upload_police_report')}
        </div>
      <input
        type="file"
        name={name}
        id={name}
        onChange={handleChange}
      />
      <label htmlFor={name}>{t('claim.choose_file')}</label>
    </div>
  );
};


const renderFileInputField:React.FC<inputFieldProps> = ({ input, meta }) => (
  <div className={meta.touched && meta.error ? "form__form-group-input-wrap form__form-group-input-wrap--error selectHasError": "form__form-group-input-wrap form__form-group-input-wrap--error" }>
    <FileInputField {...input} />
    {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
  </div>
);

export default renderFileInputField;
