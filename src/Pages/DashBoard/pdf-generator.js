// QuotationPDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, pdf, Font, Link } from '@react-pdf/renderer';
import { Button } from 'antd';
import { DownloadOutlined, FileTextFilled } from '@ant-design/icons';
Font.register({
  family: 'Arial',
  fonts: [
    { src: `${window.location.origin}/arial-font/G_ari_bd.TTF`, fontWeight: 'bold' },
    { src: `${window.location.origin}/arial-font/arial.ttf`, fontWeight: 'normal' },
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 120,
  },
  header: {
    position: 'fixed',
    top: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  logoContainer: {
    width: 220,
  },
  logo: {
    width: 200,
    height: 60,
    objectFit: 'contain',
  },
  companyHeader: {
    width: '50%',
    textAlign: 'right',
  },
  companyName: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  companyDetails: {
    fontSize: 9,
    marginBottom: 3,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '10px 0',
    backgroundColor: '#f0f0f0',
  },
  customerInfo: {
    marginBottom: 20,
    border: '1px solid #bfbfbf',
    padding: 10,
    borderRadius: 5,
  },
  customerTitle: {
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHead: {
    fontFamily: 'Arial',
    fontWeight: 600,
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    border: "1px solid black" ,
  },
  itemCol: { width: '40%' },
  specCol: { width: '40%' },
  qtyCol: { width: '7%' },
  uomCol: { width: '7%' },
  rateCol: { width: '12%' },
  amountCol: { width: '10%' },
  total: {
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  totalFSize: {
    fontSize: 10,
    fontFamily: 'Arial',
    fontWeight: 600,
    marginBottom: 0
  },
  totalBorder: {
    borderStyle: 'solid',
    borderWidth: 1.3,
    borderColor: '#00000',
    padding: 4,
    paddingLeft: 16,
  },
  termsContainer: {
    marginTop: 20,
  },
  termsSection: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  termsTitle: {
    fontSize: 10,
    width: '10%',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 10,
    width: '90%',
    textAlign: 'justify',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
  footerLogo: {
    width: 200,
    height: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  divider: {
    borderBottom: '1px solid #bfbfbf',
    marginVertical: 5,
  },
});

const Header = ({ quotationData, headerData }) => (
  <View style={styles.header} fixed>
      <Text style={styles.companyDetails}>{headerData.companyEmail}</Text>
  </View>
);

const QuotationPDF = ({ quotationData, headerData }) => (
  <Document>
    <Page wrap={true} size="LETTER" style={styles.page}>
      {/* Header with Logo and Company Info */}
      <Header quotationData={quotationData} headerData={headerData} />
      {/* Items Table */}
      <View style={styles.contentWrapper}>
        <View style={styles.table}>
          <View style={[styles.tableRow]}>
            <View style={[styles.tableCell, styles.tableHead, styles.itemCol]}>
              <Text>Item</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHead, styles.specCol]}>
              <Text>Specifications</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHead, styles.qtyCol]}>
              <Text>Qty</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHead, styles.uomCol]}>
              <Text>UOM</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHead, styles.rateCol]}>
              <Text>Unit Price</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHead, styles.amountCol]}>
              <Text>Subtotal</Text>
            </View>
          </View>

          {quotationData?.quote?.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, styles.itemCol]}>
                <Text>{item?.alloyFamily}</Text>
              </View>
              <View style={[styles.tableCell, styles.specCol]}>
                <Text>{item?.specifications}</Text>
              </View>
              <View style={[styles.tableCell, styles.qtyCol]}>
                <Text>{item?.quantity}</Text>
              </View>
              <View style={[styles.tableCell, styles.uomCol]}>
                <Text>{item?.uom}</Text>
              </View>
              <View style={[styles.tableCell, styles.rateCol]}>
                <Text>${Number(item?.prices?.price).toFixed(2)}/ {item?.uom}</Text>
              </View>
              <View style={[styles.tableCell, styles.amountCol]}>
                <Text>${(Number(item?.prices?.price) * Number(item?.quantity)).toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Total Section */}
        <View style={[styles.total,]}>
          <Text style={[styles.companyDetails, styles.totalFSize]}> Order Total: </Text>
          <Text style={[styles.totalBorder, styles.totalFSize]} >${quotationData?.totalAmount}</Text>
        </View>
        <View style={styles.termsContainer}>
          <View style={styles.termsSection}>
            <Text style={styles.termsTitle}>Prices:</Text>
            <Text style={styles.termsText}>
              Prices are in USD per UOM, FCA Titanium Industries warehouse facilities, including packing. Prices at time of order
              acknowledgement apply and are subject to change. Quantity shipped tolerances are ± 10%. Titanium Industries
              reserves the right to make any corrections to prices quoted due to new information, errors, or any other significant
              changes. All orders are subject to a full contract review of all specifications and a 48-hour order approval process to
              verify all details, stock availability, and terms and conditions. All orders will be acknowledged by a T.I. salesperson.
            </Text>
          </View>

          <View style={styles.termsSection}>
            <Text style={styles.termsTitle}>Freight:</Text>
            <Text style={styles.termsText}>
              All pricing is FCA T.I. Warehouse Facility. Delivery options and additional freight costs to be discussed with your T.I.
              salesperson.
            </Text>
          </View>

          <View style={styles.termsSection}>
            <Text style={styles.termsTitle}>Lead-time:</Text>
            <Text style={styles.termsText}>
              The lead-time will be provided by your sales representative during the order confirmation process.
            </Text>
          </View>

          <View style={styles.termsSection}>
            <Text style={styles.termsTitle}>Payment:</Text>
            <Text style={styles.termsText}>
              Payment method is to be determined.
            </Text>
          </View>
          <View style={styles.termsSection}>
            <Text style={styles.termsTitle}>Terms:</Text>
            <Link src='https://titanium.com/titanium-about-us/terms-and-conditions-of-sale-and-delivery' style={[styles.termsText, { textDecoration: 'none', color: '#000' }]}>
              https://titanium.com/titanium-about-us/terms-and-conditions-of-sale-and-delivery
            </Link>
          </View>
          <Text style={[styles.termsText, { marginBottom: 5 }]}>
          TERMS AND CONDITION
          </Text>
          <Text style={styles.termsText}>
            We appreciate your business and look forward to receiving your order
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Component to handle PDF generation and download
const QuotationGenerator = ({ quotationData }) => {
  const headerData = {
    companyLogo: '/assets/logo512.png', // Replace with your logo path
    companyName: "Your Company Name",
    companyAddress: "18 Green Pond Rd, Rockaway, NJ 07866 USA",
    companyPhone: "+1 888-482-6486",
    companyEmail: "sales@titanium.com",
  };

  const generatePDF = async () => {
    const doc = <QuotationPDF quotationData={quotationData} headerData={headerData} />;

    const pdfBlob = await pdf(doc).toBlob(); // Generate the PDF as a blob

    const url = URL.createObjectURL(pdfBlob); // Create a downloadable URL
    const a = document.createElement("a"); // Create an anchor tag
    a.href = url;
    a.download = "quotation.pdf"; // Set the filename
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Remove the element after download
    URL.revokeObjectURL(url); // Clean up the URL object
  };
  return (
    <div>
      <Button
        className='p-1'
        onClick={() => {
          const pdfBlob = pdf(<QuotationPDF quotationData={quotationData} headerData={headerData} />).toBlob();
          pdfBlob.then(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
          });
        }}>
        <FileTextFilled size={20} />
      </Button>
      <Button onClick={generatePDF}> <DownloadOutlined/> </Button>
    </div>
  );
};

export default QuotationGenerator;