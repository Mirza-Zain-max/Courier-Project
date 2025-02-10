// QuotationPDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, pdf, Font, Image } from '@react-pdf/renderer';
import { Button } from 'antd';
import { DownloadOutlined, FileTextFilled } from '@ant-design/icons';
import bookingImage from '../Assets/boking.jpg';

Font.register({
  family: 'Arial',
  fonts: [
    { src: `${window.location.origin}/arial-font/G_ari_bd.TTF`, fontWeight: 'bold' },
    { src: `${window.location.origin}/arial-font/arial.ttf`, fontWeight: 'normal' },
  ]
});


const styles = StyleSheet.create({
  page: {
    padding: 8,
    marginTop: 10,
    fontFamily: 'Helvetica',
  },
  container: {
    border: 1,
    borderColor: '#000000',
    marginTop: 8
  },
  header: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000000',
    padding: 6,
  },
  logo: {
    width: 200,
    padding: 6,
    backgroundColor: '#0066cc',
    border: "1px solid black",
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    // flex: 1,
    // border: "1px solid black",
    textAlign: 'center',
    fontSize: 8,
    // padding: 6,
  },
  infoRow: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000000',
  },
  infoCol: {
    flex: 1,
    padding: 4,
    borderRight: 1,
    borderColor: '#000000',
  },
  infoColLast: {
    flex: 1,
    padding: 4,
  },
  label: {
    fontSize: 6,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 7,
  },
  addressSection: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000000',
  },
  addressCol: {
    flex: 1,
    padding: 6,
    borderRight: 1,
    borderColor: '#000000',
  },
  addressColLast: {
    flex: 1,
    padding: 4,
  },
  addressBox: {
    border: 1,
    borderColor: '#000000',
    padding: 2,
    marginTop: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000000',
  },
  detailCol: {
    flex: 1,
    padding: 4,
    borderRight: 1,
    borderColor: '#000000',
  },
  detailColLast: {
    flex: 1,
    padding: 4,
  },
  remarks: {
    padding: 4,
  },
  veiwTitle: {
    fontSize: 10,
    border: "1px solid black",
    textAlign: "center", 
    marginTop: 8,
    fontWeight: "extrabold"
  },
  veiwText: {
    fontSize: 8,
    // border:"1px solid black", 
    lineHeight: "12px",
    padding: 3,
    textAlign: "justify",
  },
  terms: {
    fontSize: 8,
    marginTop: 10,
    textAlign: 'justify',
    // border: 1,
    borderColor: '#000000',
    padding: 4,
  }
});

const QuotationPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>Blue-EX Consignment Note # 5034355907</Text>
      </View>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text>Sonic Express</Text>
          </View>
          {/* <Image src="/Assets/boking.jpg" style={{height:50 , width: 200}} /> */}
        </View>

        {/* First Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>08/02/2025 (1819)</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Service:</Text>
            <Text style={styles.value}>BLUE CARGO</Text>
          </View>
          <View style={styles.infoColLast}>
            <Text style={styles.label}>Serving City</Text>
            <Text style={styles.value}>WAH</Text>
          </View>
        </View>

        {/* Second Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Origin:</Text>
            <Text style={styles.value}>LYP</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Account:</Text>
            <Text style={styles.value}>LYP-00951</Text>
          </View>
          <View style={styles.infoColLast}>
            <Text style={styles.label}>Destination</Text>
            <Text style={styles.value}>ATT</Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressCol}>
            <Text style={styles.label}>Shipper</Text>
            <View style={styles.addressBox}>
              <Text style={styles.value}>Sonic Express</Text>
              <Text style={styles.value}>03007644607</Text>
              <Text style={styles.value}>sonicexpressc@gmail.com</Text>
              <Text style={styles.value}>City-plaza-GTS-Chowk-Railway-road-Faisalabad</Text>
            </View>
          </View>
          <View style={styles.addressColLast}>
            <Text style={styles.label}>Consignee</Text>
            <View style={styles.addressBox}>
              <Text style={styles.value}>Mr.Basit</Text>
              <Text style={styles.value}>0318-5622187</Text>
              <Text style={styles.value}>Mohalla Masjid Farooq Azam khaur company Tehsil pindigheb District Attock</Text>
            </View>
          </View>
        </View>

        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Piece</Text>
            <Text style={styles.value}>1</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Weight</Text>
            <Text style={styles.value}>.9</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Cash Collect</Text>
            <Text style={styles.value}>Rs.1000/-</Text>
          </View>
          <View style={styles.detailColLast}>
            <Text style={styles.label}>Insurance</Text>
            <Text style={styles.value}>No</Text>
          </View>
        </View>

        {/* Remarks */}

      </View>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text>Sonic Express</Text>
          </View>
          {/* <Text style={styles.title}>Blue-EX Consignment Note # 5034355907</Text> */}
        </View>

        {/* First Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>08/02/2025 (1819)</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Service:</Text>
            <Text style={styles.value}>BLUE CARGO</Text>
          </View>
          <View style={styles.infoColLast}>
            <Text style={styles.label}>Serving City</Text>
            <Text style={styles.value}>WAH</Text>
          </View>
        </View>

        {/* Second Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Origin:</Text>
            <Text style={styles.value}>LYP</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Account:</Text>
            <Text style={styles.value}>LYP-00951</Text>
          </View>
          <View style={styles.infoColLast}>
            <Text style={styles.label}>Destination</Text>
            <Text style={styles.value}>ATT</Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressCol}>
            <Text style={styles.label}>Shipper</Text>
            <View style={styles.addressBox}>
              <Text style={styles.value}>Sonic Express</Text>
              <Text style={styles.value}>03007644607</Text>
              <Text style={styles.value}>sonicexpressc@gmail.com</Text>
              <Text style={styles.value}>City-plaza-GTS-Chowk-Railway-road-Faisalabad</Text>
            </View>
          </View>
          <View style={styles.addressColLast}>
            <Text style={styles.label}>Consignee</Text>
            <View style={styles.addressBox}>
              <Text style={styles.value}>Mr.Basit</Text>
              <Text style={styles.value}>0318-5622187</Text>
              <Text style={styles.value}>Mohalla Masjid Farooq Azam khaur company Tehsil pindigheb District Attock</Text>
            </View>
          </View>
        </View>

        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Piece</Text>
            <Text style={styles.value}>1</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Weight</Text>
            <Text style={styles.value}>.9</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Cash Collect</Text>
            <Text style={styles.value}>Rs.1000/-</Text>
          </View>
          <View style={styles.detailColLast}>
            <Text style={styles.label}>Insurance</Text>
            <Text style={styles.value}>No</Text>
          </View>
        </View>

        {/* Remarks */}

      </View>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text>Sonic Express</Text>
          </View>
          {/* <Text style={styles.title}>Blue-EX Consignment Note # 5034355907</Text> */}
        </View>

        {/* First Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>08/02/2025 (1819)</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Service:</Text>
            <Text style={styles.value}>BLUE CARGO</Text>
          </View>
          <View style={styles.infoColLast}>
            <Text style={styles.label}>Serving City</Text>
            <Text style={styles.value}>WAH</Text>
          </View>
        </View>

        {/* Second Info Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Origin:</Text>
            <Text style={styles.value}>LYP</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Account:</Text>
            <Text style={styles.value}>LYP-00951</Text>
          </View>
          <View style={styles.infoColLast}>
            <Text style={styles.label}>Destination</Text>
            <Text style={styles.value}>ATT</Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressCol}>
            <Text style={styles.label}>Shipper</Text>
            <View style={styles.addressBox}>
              <Text style={styles.value}>Sonic Express</Text>
              <Text style={styles.value}>03007644607</Text>
              <Text style={styles.value}>sonicexpressc@gmail.com</Text>
              <Text style={styles.value}>City-plaza-GTS-Chowk-Railway-road-Faisalabad</Text>
            </View>
          </View>
          <View style={styles.addressColLast}>
            <Text style={styles.label}>Consignee</Text>
            <View style={styles.addressBox}>
              <Text style={styles.value}>Mr.Basit</Text>
              <Text style={styles.value}>0318-5622187</Text>
              <Text style={styles.value}>Mohalla Masjid Farooq Azam khaur company Tehsil pindigheb District Attock</Text>
            </View>
          </View>
        </View>

        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Piece</Text>
            <Text style={styles.value}>1</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Weight</Text>
            <Text style={styles.value}>.9</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.label}>Cash Collect</Text>
            <Text style={styles.value}>Rs.1000/-</Text>
          </View>
          <View style={styles.detailColLast}>
            <Text style={styles.label}>Insurance</Text>
            <Text style={styles.value}>No</Text>
          </View>
        </View>

        <View >
          <Text style={styles.veiwTitle}>TERMS AND CONDITION</Text>
          <View style={styles.terms}>
            <Text>
              1. When ordering Sonic Express (A UNS Ltd. Company) services you, as 'Shipper', are agreeing, on your behalf and on behalf of anyone else with an interest in the Shipment that the Terms and Conditions shall apply from
              the time that Sonic Express accepts the Shipment unless otherwise agreed in writing by an authorized officer of Sonic Express. A 'waybill' shall include any label produced by Sonic Express's automated systems, air waybill, or consignment
              note and shall incorporate these Every Shipment is transported on a limited liability basis as provided herein 'Sonic Express' means any member of the UNS Network. This is the ephemeral version of 'Standard Terms &
              Conditions of Carriage'. The detailed version of the same is available on www.blue-ex.com or for physical copy please contact your concern sales representative. {"\n"}
              2. Unacceptable Shipments: Shipper agrees that its Shipment is acceptable for transportation and is deemed unacceptable if:{"\n"}
              • It is classified as hazardous material, dangerous goods, prohibited or restricted articles by IATA (International Air Transport Association), ICAO (International Civil Aviation Organization), any applicable government
              department or other relevant organization;{"\n"}
              • No customs declaration is made when required by applicable customs regulations; or {"\n"}
              • Sonic Express decides it cannot transport an item safely or legally (such items include but are not limited to: animals, bullion, currency, bearer form negotiable instruments, precious metals and stones, firearms, parts
              thereof and ammunition, human remains, pornography and illegal narcotics/drugs).{"\n"}
              3. Deliveries & Un-deliverables: Shipments cannot be delivered to PO boxes or postal codes. Shipments are delivered to the Receiver's address given by Shipper (which in the case of mail services shall be deemed to
              be the first receiving postal service) but not necessarily to the named Receiver personally. {"\n"}
              4. Inspection & Liability: Sonic Express has the right to open and inspect a Shipment without prior notice to Shipper. Sonic Express liability for loss, pilferage, damage or delay of shipments is limited to Rs.100/= (Rupees One
              Hundred only) per domestic consignment and Rs. 1,500/= (Rupees Fifteen Hundred only) per international consignment. No claim will be entertained by Sonic Express exceeding these amounts.
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Component to handle PDF generation and download
const QuotationGenerator = ({ quotationData }) => {
  const headerData = {
    companyLogo: '/assets/booking.png', // Replace with your logo path
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
      <Button onClick={generatePDF}> <DownloadOutlined /> </Button>
    </div>
  );
};

export default QuotationGenerator;