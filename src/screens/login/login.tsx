import {useCallback, useState} from "@lynx-js/react";
import "./login.scss";
import {useToast} from "../../components/ToastMessage/toastMessage.component.js";
import {Button} from "../../components/Button/button.component.js";
import type {LoginRequest} from "../../models/loginRequest.model.js";
import {authService} from "../../services/auth.service.js";
import {userService} from "../../services/user.service.js";


export function LoginScreen() {
    const [formValues, setFormValues] = useState<LoginRequest>({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState<boolean>(false);

    // <<-- เรียกใช้ useToast Hook ที่นี่ -->>
    const { addToast } = useToast();

    /*const handleInputChange = useCallback((field: keyof LoginRequest, value: string) => {
        debugger;
        setFormValues((prev: any) => ({ ...prev, [field]: value }));
    }, []);*/

    const handleInputUserName = (event: any) => {
        formValues.email = event.detail.value;
        console.log(formValues.email);
        setFormValues(formValues);
    };

    const handleInputPassword = (event: any) => {
        formValues.password = event.detail.value;
        console.log(formValues.password);
        setFormValues(formValues);
    };

    const handleLogin = useCallback(async () => { // <<-- เปลี่ยนเป็น async
        setLoading(true);

        if (!formValues.email || !formValues.password) {
            addToast({ severity: 'warn', summary: 'Input Required', detail: 'Please fill in all fields.' });
            setLoading(false);
            return;
        }

        try {
            // ใช้ await เพื่อรอ Promise จาก authService.login
            const authResponse = await authService.login(formValues);
            console.log('Login successful, AuthResponse:', authResponse);

            // เมื่อ Login สำเร็จ ให้ fetch ข้อมูลผู้ใช้
            debugger;
            const userData = await userService.fetchUser();
            console.log('User data fetched:', userData);

            if (userData) {
                addToast({ severity: 'success', summary: 'Login Success', detail: `Welcome, ${userData.email || 'User'}!` });
                // <<-- การนำทางใน Lynx (ต้องใช้ API ของ Lynx เอง) -->>
                // ถ้า Lynx มี API สำหรับการนำทาง เช่น Lynx.navigate()
                // nav('/home'); // ถ้าใช้ react-router-dom
            } else {
                addToast({ severity: 'warn', summary: 'Login Success', detail: 'But user data could not be retrieved.' });
            }

        } catch (err: any) {
            console.error('Login or fetchUser failed:', err);
            let errorMessage = 'An unexpected error occurred during login.';
            if (err && typeof err === 'object' && err.message) {
                try {
                    const parsedError = JSON.parse(err.message);
                    errorMessage = parsedError.message || errorMessage;
                    // สามารถใช้ parsedError.statusCode หรือ parsedError.errors ได้
                } catch (parseError) {
                    errorMessage = err.message; // ถ้า parse ไม่ได้ ก็ใช้ message เดิม
                }
            }
            addToast({
                severity: 'error',
                summary: 'Login Failed',
                detail: errorMessage
            });
        } finally {
            setLoading(false);
        }
    }, [formValues, addToast]);

    return (
        <page>
            <view className="login-container">
                <text className="login-title">Welcome Back!</text>
                <text className="login-subtitle">Please log in to continue</text>

                <view className="login-form">
                    <input
                        className="login-input"
                        placeholder="Username"
                        value={formValues.email}
                        // @ts-ignore
                        bindinput={handleInputUserName}
                    />

                    <input
                        // @ts-ignore
                        bindinput={handleInputPassword}
                        className="login-input"
                        placeholder="Password"
                        value={formValues.password}
                        type="password"
                    />

                    <Button className="login-submit-button" onClick={handleLogin}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </Button>
                </view>

                <view className="login-links">
                    <text className="login-link-text">Forgot Password?</text>
                    <text className="login-link-text">Don't have an account? Sign Up</text>
                </view>
            </view>
        </page>
    );
}