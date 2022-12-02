import styled from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import SVG from 'react-inlinesvg';
import Select from 'react-select';

// const colorActiveLable = 'green';

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  /* transform: scale(0); */

  /* &.active {
    transform: scale(1);
  } */
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  width: 540px;
  height: 603px;
  border-radius: 20px;
  background-color: var(--white);
`;

export const ModalHead = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: 'Poppins Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  color: var(--black);
`;

// FORM RADIOBUTTON

export const ModalForm = styled(Form)`
  display: block;
`;

export const Operation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-family: 'CirceBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
`;

export const LabelIncome = styled.label`
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  color: var(--gray-5);
  transition: 500ms;
  text-align: right;

  &:hover,
  :active {
    color: var(--btn-bg-color);
  }
`;

export const LabelExpense = styled.label`
  color: var(--gray-5);
  margin-left: 20px;
  text-align: right;
  position: relative;
  cursor: pointer;
  text-align: left;

  &:hover,
  :active {
    color: var(--error-color);
  }
`;

// border: 1px solid #e0e0e0;
//   width: 80px;
//   height: 40px;
//   border-radius: 30px;

export const ToggleRb = styled.div`
  position: relative;
  height: 40px;
  width: 80px;
  background-color: var(--white);
  border: 1px solid var(--gray-5);
  border-radius: 30px;
  transition: all 500ms;
`;

export const Plus = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  background-color: var(--btn-bg-color);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  top: -3px;
  left: 0;
  border-radius: 50%;
  transition: all 500ms;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioFieldIncome = styled(Field)`
  display: none;

  &:checked ~ ${LabelIncome} {
    color: var(--btn-bg-color);
  }
`;

export const RadioFieldExpense = styled(Field)`
  display: none;

  &:checked {
    ~ ${LabelExpense} {
      color: var(--error-color);
    }
    ~ ${ToggleRb} > ${Plus} {
      left: 40px;
      background-color: var(--error-color);
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    }
  }
`;

export const CloseIcon = styled(SVG)`
  left: 20%;
  width: 20px;
  height: 20px;
  fill: var(--white);
`;

// Toggle Changes

// export const Marker = styled.div`
//   position: relative;
//   background-color: #e0e0e0;
//   width: 16px;
//   height: 16px;
//   border-radius: 50%;
//   z-index: 2;
//   pointer-events: none;
//   transform: translateX(1px);
//   transition: transform 250ms linear;
// `;

// export const RadioButton = styled.div`
//   display: flex;
//   justify-content: space-around;
//   text-align: center;
//   align-items: center;
//   border-radius: 30px;
//   width: 80px;
//   height: 40px;
//   border: 1px solid #e0e0e0;
// `;

// BUTTON

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: var(--white);
  border: none;
  margin: 20px;
`;

export const Btn = styled.div`
  display: block;
  /* font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase; */
`;

export const ButtonAdd = styled.button`
  width: 300px;
  height: 50px;
  background-color: var(--btn-bg-color);
  color: var(--white);
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 1000ms;

  &:hover {
    background-color: var(--white);
    color: var(--btn-bg-color);
    transition: 1000ms;
    border: 1px solid var(--btn-bg-color);
  }
`;

export const ButtonCancel = styled.button`
  width: 300px;
  height: 50px;
  background-color: var(--white);
  border: 1px solid var(--active-bg-color);
  border-radius: 20px;
  color: var(--active-bg-color);
  cursor: pointer;
  transition: 1000ms;
  &:hover {
    background-color: var(--active-bg-color);
    color: var(--white);
    transition: 1000ms;
  }
`;

export const DateContainer = styled.div`
  position: relative;
`;

export const IconDate = styled.label`
  position: absolute;
  top: 60%;
  left: 80%;
  cursor: pointer;
`;

export const SvgDate = styled.svg`
  transition: 500ms;
  transform: scale(1);
  :hover {
    box-shadow: 0px 0px 23px -3px rgba(0, 0, 0, 0.75);
    transition: 500ms;
    transform: scale(1.1);
  }
`;

export const AmountDate = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding-right: 25px;
`;
// Field

export const SelectField = styled(Select)`
  display: block;
  outline: none;
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 50px;
  border-color: red;
`;

export const AmountField = styled(Field)`
  padding: 8px;
  margin-top: 40px;
  border: 1px solid var(--gray-5);
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  &::placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 8px;
  }
`;

export const DateField = styled(DatePicker)`
  outline: none;
  padding: 8px;
  padding-left: 20px;
  margin-top: 40px;
  border: 1px solid var(--gray-5);
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const CommentField = styled(Field)`
  outline: none;
  padding: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid var(--gray-5);
  border-top: none;
  border-left: none;
  border-right: none;
  width: 400px;

  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  &::placeholder {
    color: var(--gray-4);
  }
`;
