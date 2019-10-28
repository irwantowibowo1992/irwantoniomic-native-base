## NATIVE BASE

Kali ini kita akan belajar tentang native base.
Hal pertama yang harus kita siapkan tentu saja package native-base, jika belum ada maka install terlebih dahulu dengan cara ``` npm install --save native-base``` atau bisa juga dengan menggunakan yarn dengan cara ```yarn add native-base```.

Jika sudah selesai diinstall tinggal kita link-kan supaya dapat dipaki, dengan cara ```react-native link```

Oke selesai untuk install native-base. Untuk percobaan pertama kita akan membuat button sederhana menggunkana native base

### App.js
```javascript
    import { Container, Button, Text } from 'native-base'

    class App extends Component {
    render(){
        return(
        <Container>
            <Button>
            <Text>Button Native Base</Text>
            </Button>
        </Container>
        )
    }
    }
```