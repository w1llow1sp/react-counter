import  { useState } from 'react';
import {Button, Layout, notification, Typography} from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count === 10) {
            // Если счетчик равен 10, показать уведомление
            notification.warning({
                message: 'Предупреждение',
                description: 'Счетчик не может быть больше 10.',
                placement: 'topRight',
            });
        } else {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count === 0) {
            // Если счетчик равен 0, показать уведомление
            notification.warning({
                message: 'Предупреждение',
                description: 'Счетчик не может быть меньше 0.',
                placement: 'topRight',
            });
        } else {
            setCount(count - 1);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: '#001529', padding: '0 20px' }}>
                <Title level={3} style={{ color: 'white' }}>React Счетчик</Title>
            </Header>
            <Content style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Title>Текущий счет: {count}</Title>
                <div style={{ marginBottom: '20px' }}>
                    <Button type="primary" onClick={increment} style={{ marginRight: '10px' }}>
                        Увеличить
                    </Button>
                    <Button type="default" onClick={decrement}>
                        Уменьшить
                    </Button>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>React Counter Example ©2024 Created by You</Footer>
        </Layout>
    );
};

export default App;
