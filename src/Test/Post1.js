import React from "react";
import TopBar from "./TopBar";
import {Button,CardActions,Grid,Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Botton from "./Botton";
const style={
    root:{
        width:1200,
        margin:'auto',
        paddingTop:150
    },
    img:{
        width: "100%",
        margin: 'auto',
    }
};
function Post1(props) {
    const {classes}=props;
    return(
        <div>
            <TopBar/>
            <div className={classes.root}>
                <div>
                    <Typography component="p">
                        Hà Nội nổi tiếng với rất nhiều công trình kiến trúc độc đáo trong đó phải kể đến chùa Một Cột –
                        ngôi
                        thiêng đã hàng ngàn năm tuổi. Du khách đến tham quan thủ đô đều không khỏi trầm trồ trước kiệt
                        tác
                        ấn tượng này của người xưa. Đặc biệt ngôi chùa cổ này còn mang những dấu ấn văn hóa - lịch sử
                        của
                        dân tộc. Bài viết Giới thiệu đôi nét về lịch sử Chùa Một Cột ở Hà Nội sau đây sẽ giúp quý khách
                        có
                        thêm cái nhìn rõ nét hơn về ngôi chùa này!

                        <img className={classes.img}
                             src={"https://s3-ap-northeast-1.amazonaws.com/thanh-img/Gioi-thieu-doi-net-ve-lich-su-chua-mot-cot-ha-noi-01.jpg"}
                             alt={""}/>
                        <h3>Chùa Một Cột nằm ở đâu Hà Nội?</h3><br/>
                        Chùa Một Cột là một trong những địa điểm du lịch đẹp ở Hà Nội luôn thu hút lượng lớn du khách
                        ghé
                        thăm mỗi ngày.<br/>

                        Chùa xưa được vua Lý xây dựng trên đất thôn Thanh Bảo, huyện Quảng Đức, phía Tây hoàng thành
                        Thǎng
                        Long xưa. Ngày nay chùa nằm ở phố Chùa Một Cột, ngay cạnh quần thể di tích Quảng trường Ba Đình
                        –
                        Lăng Chủ Tịch ở trung tâm quận Ba Đình, Hà Nội.<br/>

                        Quý khách có thể đến tham quan, chiêm bái chùa Một Cột bằng nhiều phương tiện khác nhau như xe
                        bus,
                        xe máy, taxi… Khi thăm chùa, quý khách nên chú ý ăn mặc lịch sự và tôn trọng những quy định
                        chuẩn
                        mực nơi tôn nghiêm.<br/>

                        Chùa Một Cột nằm cạnh khu di tích Phủ Chủ Tịch – Lăng Bác Hồ nên du khách thường kết hợp tham
                        quan
                        cả hai địa điểm này. Quý khách có thể di chuyển đến Lăng Bác ở số 19 đường Ngọc Hà, quận Ba
                        Đình, Hà
                        Nội.<br/>

                        Sau đó theo hướng dẫn vào viếng Bác và men theo lối đi lần lượt tham quan Phủ Chủ Tịch, Bảo Tàng
                        Hồ
                        Chí Minh và chùa Một Cột.<br/><br/>

                        <img className={classes.img}
                             src={"https://s3-ap-northeast-1.amazonaws.com/thanh-img/hinh-anh-chua-mot-cot-0.jpg"}
                             alt={""}/>
                        <h3>Đôi nét về lịch sử chùa Một Cột</h3><br/>
                        Chùa Một Cột còn được gọi với những cái tên khác là chùa Mật, chùa Diên Hựu hay Liên Hoa
                        Đài.<br/>

                        Theo sử xưa, chùa được vua Lý Thái Tông cho xây dựng vào mùa đông năm 1049. Tích xưa còn lưu lại
                        câu
                        chuyện vua Lý Thái Tông nằm chiêm bao thấy Phật Quan Âm tọa thiền trên tòa hoa sen sáng rực, đưa
                        tay
                        dắt vua lên đài.<br/>

                        Tỉnh mộng vua đã cho dựng chùa Một Cột với lối kiến trúc tựa như trong giấc mơ. Từ đó người ta
                        thấy
                        một ngôi chùa với kết cấu một cột độc đáo, dáng tựa đài sen vươn lên giữa mặt hồ Linh Chiểu ở
                        kinh
                        thành Thăng Long.<br/>

                        Sau khi dựng chùa, vua Lý Anh Tông thường lui tới cầu nguyện. Không lâu sau Hoàng hậu hạ sinh
                        một
                        Hoàng tử khôi ngô. Cho rằng công đức Phật ban cho, vua Lý cho tu sửa lại chùa và dựng thêm một
                        ngôi
                        chùa bên cạnh chùa Một Cột để tạ ơn.<br/>

                        Lúc này quần thể chùa (bao gồm chùa Một Cột và ngôi chùa mới) có tên là Diên Hựu với ý nghĩa
                        “phước
                        bền dài lâu”.<br/>
                        Không nằm ngoài quy luật của thời gian, trải qua nhiều triều đại, nhiều biến cố lịch sử chùa có
                        nhiều sự thay đổi. Từ thời Lý, Trần, Lê và sau này là nhà Nguyễn chùa được trùng tu, sửa chữa
                        nhiều
                        lần. Bởi vậy mà những đặc trưng văn hóa - kiến trúc trong từng thời kì cũng có sự đổi thay.<br/>

                        Đặc biệt vào năm 1954, thực dân Pháp đã phá hủy chùa Một Cột. Toàn bộ kiến trúc cũ chùa đều bị
                        mất
                        đi, duy chỉ còn cột trụ dưới lòng hồ Linh Chiểu và mấy xà gỗ. Ngay sau đó chùa đã được Chính phủ
                        tu
                        sửa lại. Cho đến nay, dù trải qua thêm vài lần tu bổ nhưng chùa vẫn mang những nét điển hình của
                        kiến trúc cũ.<br/><br/>
                        <img className={classes.img}
                             src={"https://s3-ap-northeast-1.amazonaws.com/thanh-img/Gioi-thieu-doi-net-ve-lich-su-chua-mot-cot-ha-noi-01.jpg"}
                             alt={""}/>
                        <h3>Kiến trúc ấn tượng của chùa Một Cột</h3><br/>
                        Nhắc đến những công trình có kiến trúc ấn tượng khó có công trình nào vượt qua được chùa Một
                        Cột. Tổ
                        chức Kỉ lục Châu Á đã xác nhận chùa Một Cột là “Ngôi chùa có kiến trúc độc đáo nhất châu Á” năm
                        2012. Kỉ lục Guiness Việt Nam cũng ghi nhận chùa Một Cột là “Ngôi chùa có kiến trúc độc đáo nhất
                        Việt Nam”.<br/>

                        Chùa Một Cột là một công trình kiến trúc xuất sắc thể hiện tính dân tộc đậm nét. Không gian chùa
                        là
                        bản giao hưởng của tính sáng tạo trong kiến trúc kết hợp nghệ thuật điêu khắc đá, hội họa, chạm
                        khắc
                        gỗ… Tất cả đều rất dân tộc, rất Việt Nam!<br/>

                        Kiến trúc của chùa Một Cột độc đáo có “một không hai”. Chùa được tạo hình giống như một đóa hoa
                        sen
                        nở trên mặt nước – loài hoa tượng trưng cho sự tinh khiết và cao quý của Phật pháp. Vì vậy dân
                        gian
                        vẫn gọi chùa Một Cột là Liên Hoa Đài.<br/>

                        Toàn bộ không gian chùa đều được đặt trên một trụ đá dưới hồ Linh Chiểu. Trên thực tế trụ gồm 2
                        khối
                        đá nhưng được gắn kết khéo léo như một tạo nên sự độc đáo cho kiến trúc chùa. Chùa được làm bằng
                        nhiều loại gỗ quý.<br/>

                        Mái chùa lợp ngói cổ, được thiết kế khéo léo hình đao cong có đắp hình rồng chầu mặt nguyệt –
                        còn
                        gọi là “Lưỡng long chầu nguyệt” với nét hoa văn cực kì tinh xảo. Trong kiến trúc đền chùa từ xưa
                        đến
                        nay, rồng là một biểu tượng không thể thiếu.

                        Đây là hình tượng thể hiện sự quyền uy thần thánh và mang đậm những giá trị nhân văn, phản ánh
                        ước
                        vọng và trí tuệ của con người.<br/>
                        Để lên chùa thắp hương, chiêm bái quý khách sẽ phải bước qua một bậc thang nhỏ có 13 bậc làm
                        bằng
                        gạch. Trên cầu thang có gắn bia đá giới thiệu sơ lược lịch sử ngôi chùa.<br/>

                        Bên trong chùa đặt tượng Phật Quan Âm với lối trang trí tinh xảo, sắc nét. Tượng Phật được thiết
                        kế
                        mô phỏng theo giấc mộng của vua Lý Thái Tông xưa – Phật Quan Âm ngồi trên đài sen sáng rực, tỏa
                        ánh
                        hào quang… Xung quanh chùa là hồ Linh Chiểu được bao bọc bằng tường gạch thấp.<br/>

                        Trong hồ thả hoa sen, bốn mùa tỏa hương thơm ngát.<br/>

                        Ngoài những nét kiến trúc độc đáo chùa Một Cột còn là đỉnh cao của triết học phương Đông. Nhiều
                        nhà
                        nghiên cứu cho rằng không gian chùa được xây dựng hài hòa giữa triết lý âm – dương. Chùa được
                        dựng
                        hình vuông tượng trưng cho âm. Trong khi đó cột đỡ chùa hình tròn tượng trưng cho dương. Đó
                        chính sự
                        hài hòa của đất trời, sinh – tử, âm – dương…<br/>

                        Dù kiến trúc nguyên bản của chùa Một Cột thời Lý không còn nữa nhưng ngôi chùa là sự nhắc nhớ về
                        một
                        thời vang bóng và là niềm tự hào của dân tộc.<br/><br/>

                        <img className={classes.img}
                             src={"https://s3-ap-northeast-1.amazonaws.com/thanh-img/9-Du-lich-chua-mot-cot-mytour-13.jpg"}
                             alt={""}/>
                        <h3>Chùa Một Cột là điểm du lịch ấn tượng ở Hà Nội</h3><br/>
                        Ngày nay chùa Một Cột không chỉ là một di tích lịch sử độc đáo với những giá trị về kiến trúc,
                        nhân
                        văn mà còn là một điểm du lịch thú vị. Trong các tour du lịch Hà Nội 1 ngày của du khách gần xa,
                        không thể không có địa danh chùa Một Cột.<br/>

                        Trải qua những thăng trầm “đóa sen ngàn năm” vẫn giữ được hồn cốt của đất Thăng Long xưa. Chùa
                        Một
                        Cột và những giá trị mà ngôi chùa cổ này để lại sẽ vẫn luôn là những tư liệu sống mãi cho đến
                        muôn
                        đời sau.<br/>

                        Nếu ghé thăm mảnh đất cố đô, quý khách đừng quên đến thăm chùa Một Cột để cảm nhận được sự độc
                        đáo,
                        tài hoa của kiến trúc người Việt xưa. Bên cạnh đó chùa cũng là nơi để quý khách có thể tìm hiểu
                        thêm
                        về cội nguồn lịch sử Việt Nam.<br/>

                        Và đặc biệt, chùa Một Cột là nơi mà tâm hồn cảm thấy thật an yên và bình thản. Nếu cần một
                        khoảng
                        lặng thì có lẽ không có gợi ý nào tuyệt hơn là dâng hương tại chùa Một Cột.<br/>

                        Hi vọng những chia sẻ trên của Viet Fun Travel sẽ giúp quý khách có thêm những góc nhìn rõ về
                        chùa
                        Một Cột. Kính chúc quý khách có một chuyến đi Hà Nội thật tuyệt vời.<br/><br/>
                    </Typography>


                </div>

            </div>
            <Botton/>
        </div>
    );

}
export default withStyles(style)(Post1)