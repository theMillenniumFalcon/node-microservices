import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Login } from '../Login';
import { Account } from '../Account';
import { SignUp } from '../SignUp';

export const AccountDetails = () => {
    const session = useSelector(state => state.session)
    const [isSigningUp, setIsSigningUp] = useState(false)

    if (session) return <Account />

    return isSigningUp ? (
        <SignUp onChangeToLogin={() => setIsSigningUp(true)} />
    ) : (
        <Login onChangeToSignUp={() => setIsSigningUp(true)} />
    )
}