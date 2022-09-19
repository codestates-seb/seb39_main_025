import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as S from './SnsFormStyles';
import UploadIcon from '../../../assets/upload-file.png';
import LeftArrow from '../../../assets/left-arrow.png';
import TempProfilePic from '../../../assets/paw-active.png';

function SnsUploadForm() {
  const navigate = useNavigate();

  const defaultFileName = 'Drag Photos and Videos Here';
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [fileName, setFileName] = useState(defaultFileName);

  const imgSelectHandler = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (event) => setImgSrc(event.target.result);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // 요청 본문에서 파일 형식을 form-data로 하므로 append only. -> .append(key, value)
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('/api/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('업로드 완료');
      setTimeout(() => {
        setFileName(defaultFileName);
        setImgSrc(null);
      }, 3000);
      console.log(res);
      navigate('/');
    } catch (err) {
      toast.error(err.message);
      setFileName(defaultFileName);
      setImgSrc(null);
    }
  };

  return (
    <S.FormLayout>
      <S.FormContainer>
        <S.FormHeader>
          <S.HeaderReturnBtnBox>
            <img src={LeftArrow} alt="cancel upload and show previous page" />
          </S.HeaderReturnBtnBox>
          <h1>Create New Post</h1>
          <S.HeaderShareBtn type="button">SHARE</S.HeaderShareBtn>
        </S.FormHeader>
        <S.FormWrapper action="" onSubmit={onSubmit}>
          <S.FormLeftBox>
            <S.FormPrevImgBox>
              <img
                src={imgSrc}
                alt="upload-preview"
                className={imgSrc && 'show'}
              />
            </S.FormPrevImgBox>

            <S.FormDropperBox>
              <S.FileDropIconBox>
                <img src={UploadIcon} alt="upload-icon" />
              </S.FileDropIconBox>
              <label htmlFor="image">{fileName}</label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={imgSelectHandler}
              />
            </S.FormDropperBox>
            <S.FormSubmitBtn type="submit">업로드</S.FormSubmitBtn>
          </S.FormLeftBox>
          <S.FormRightBox>
            <S.FormRightUserInfo>
              <S.UserProfilePic img src={TempProfilePic} alt="user-profile" />
              <S.UserName>username</S.UserName>
            </S.FormRightUserInfo>
            <S.FormTextInputBox>
              <textarea placeholder="내용을 적어 주세요..." />
            </S.FormTextInputBox>
            <S.FormRightMidBox>
              <span>위치</span>
            </S.FormRightMidBox>
            <S.FormRightMidBox>
              <span>태그</span>
            </S.FormRightMidBox>
          </S.FormRightBox>
        </S.FormWrapper>
      </S.FormContainer>
    </S.FormLayout>
  );
}

export default SnsUploadForm;
