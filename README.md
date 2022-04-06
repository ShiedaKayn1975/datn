# Đồ án tốt nghiệp BK
# Sàn đấu giá online
## Đây chỉ là ý tưởng ban đầu thôi =))

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## BA Ver 1

- Cho phép người dùng có thể đấu giá hoặc đưa sản phẩm lên sàn để đấu giá.
- Người dùng có thể xem các phiên đấu giá đang diễn ra một cách trực tiếp .
- Để có thể đấu giá một sản phẩm, ngừoi dùng cần tạo tài khoản và tài khoản phải có một lượng tiền để có thể đấu giá.
- Một phiên đấu giá được cho là thành công khi người bán nhận đuọc tiền, người mua nhận được hàng và sau khi người mua nhận hàng sau 3 ngày không có bất kì khiếu nại nào.
- Sau khi phiên đấu giá thành công, người bán sẽ được nhận tiền.
- Sau mỗi phiên đấu giá thành công, người bán sẽ được tăng mức độ uy tín.
- Phí mỗi phiên đấu giá là 5% giá trị của sản phẩm

## BA Ver 2
- Hệ thống phục vụ 2 mục tiêu là customer và seller
- Với seller, seller có thể tạo sản phẩm, sản phẩm sẽ có
  + Hình ảnh
  + Giá khởi điểm
  + hashtag
  + Tên sản phẩm
- Với customer, có thể vào để đấu giá sản phẩm nếu sản phẩm vẫn còn trong phiên đấu giá.
- Phí mỗi lần trả giá, phí chốt giá
- Sau khi chốt giá của một customer, cả hai sẽ được đưa vào 1 phòng chat.
- Trong phòng chat sẽ chốt về dịch vụ ship, phí ship, seller có thể tự đặt ship, ...

## Tech

Build theo mô hình microservice. 

- [ReactJS] - Frontend
- [Ruby On Rails] - Backend

## Run

Pull nhánh dev về

- npm install
- npm start
