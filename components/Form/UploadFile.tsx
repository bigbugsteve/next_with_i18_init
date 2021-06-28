import { useCallback } from 'react'
import {useDropzone} from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import PlusCircleIcon from 'mdi-react/PlusCircleIcon'

const UploadFile = () => {

    const { t } = useTranslation('common')
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
        
        return (
            <div {...getRootProps()} className="document-upload">
                <label htmlFor="document_upload">
                    <span className="textinput__label">
                        {t('mypersonaldata.add_document')}
                    </span>
                    <input {...getInputProps()} id="document_upload"  />
                        <p className="document-upload__dropzone"><PlusCircleIcon color="#248E59" />{t('mypersonaldata.add_photo_document')}</p>
                    
                </label>
            </div>
        )
        }
export default UploadFile
