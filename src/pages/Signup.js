import React from "react";
import { Grid, Text, Button, Input } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [pwd_check, setPwdCheck] = React.useState("");
    const [user_name, setUserName] = React.useState("");


    const signup = () => {
        
        if(id === '' || pwd === '' || user_name === ''){
            window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요!");
            return;
        }

        if(!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다!");
            return;
        }

        if(pwd !== pwd_check){
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
            return;
        }

        dispatch(userActions.signupFB(id, pwd, user_name));
    };

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px">회원가입</Text>

                <Grid padding="16px 0">
                    <Input label="아이디" placeholder="아이디를 입력해주세요." _onChange={(e) => {setId(e.target.value);}}></Input>
                </Grid>

                <Grid padding="16px 0">
                    <Input label="닉네임" placeholder="닉네임을 입력해주세요." _onChange={(e) => {setUserName(e.target.value);}}></Input>
                </Grid>

                <Grid padding="16px 0">
                    <Input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요." _onChange={(e) => {setPwd(e.target.value);}}></Input>
                </Grid>

                <Grid padding="16px 0">
                    <Input type="password" label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요." _onChange={(e) => {setPwdCheck(e.target.value);}}></Input>
                </Grid>

                <Button text="회원가입하기" _onClick={signup}></Button>
            </Grid>
        </React.Fragment>
    );
}

Signup.defaultProps = {};

export default Signup;