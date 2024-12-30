import javax.swing.*;
import java.awt.*;

public class ProductDisplay {

    public static void main(String[] args) {
        // Tạo frame để chứa các sản phẩm
        JFrame frame = new JFrame("Danh Sách Sản Phẩm");
        frame.setSize(400, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Tạo một panel để chứa các sản phẩm
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        // Thêm sản phẩm vào panel
        panel.add(createProductPanel("Áo Thun Nam", "350,000 VND"));
        panel.add(createProductPanel("Áo Sơ Mi", "400,000 VND"));
        panel.add(createProductPanel("Đầm Dạ Hội", "900,000 VND"));
        panel.add(createProductPanel("Quần Jean", "600,000 VND"));
        panel.add(createProductPanel("Váy Maxi", "750,000 VND"));
        panel.add(createProductPanel("Áo Hoodie", "500,000 VND"));
        panel.add(createProductPanel("Áo Khoác Jeans", "850,000 VND"));
        panel.add(createProductPanel("Quần Âu", "550,000 VND"));

        // Thêm panel vào frame
        frame.add(panel);

        // Hiển thị frame
        frame.setVisible(true);
    }

    // Hàm tạo panel cho mỗi sản phẩm
    private static JPanel createProductPanel(String productName, String price) {
        JPanel productPanel = new JPanel();
        productPanel.setLayout(new GridLayout(1, 2));
        
        JLabel productNameLabel = new JLabel(productName);
        productNameLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        productNameLabel.setForeground(Color.BLACK);  // Màu chữ đen
        
        JLabel priceLabel = new JLabel(price);
        priceLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        priceLabel.setForeground(Color.BLACK);  // Màu chữ đen
        
        productPanel.add(productNameLabel);
        productPanel.add(priceLabel);
        
        return productPanel;
    }
}
