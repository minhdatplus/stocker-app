# Stock Data

```
git clone https://github.com/minhdatplus/stocker-app
```

Cài đặt node modules

```
npm install
```

Cấu hình đường dẫn dịch vụ fundamental-service đã triển khai phía trên tại đường dẫn

```
src/services/const/server.const.js

export const host = '<fundamental_service_url>';
```

Sau đó tiến hành build docker image theo lệnh bên dưới

```
docker build -t stocker-app:1.0 .

docker run -it -d -p 8000:8000 stocker-app:1.0 .
```
