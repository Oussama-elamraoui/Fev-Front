import React, { Fragment } from "react";
import { Text, View, Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import hna_m3ak from '../../../../assets/images/logo-dark.png';
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    content:{
     marginTop:20,
    },
    logo: {
        
        height: 50,
        marginLeft: 0,
        paddingLeft:0,
        // marginRight: 'auto'
        left:0,
    },
    pagehead:{
     flexDirection:'row',
     display:'flex',
     justifyContent:'space-between',
    },
    titleContainer: {
        marginTop: 16,
        marginBottom:20,
    },
    reportTitle: {
        color: 'black',
        letterSpacing: 2,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration:'underline',
        // textDecorationColor:''
        
    },
    authorContainer: {
        flexDirection: 'row',
    },
    employeeContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-start'
    },
    patientContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    Date: {
        fontSize: 12,
        fontStyle: 'bold',
        marginTop:20,
    },
    text:{
        textAlign:'justify',
        textIndent:10,
    },
    label: {
        width: 60
    },
    headerContainer: {
        marginTop: 20,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    titleContainerfooter: {
        marginTop: 12
    },
    reportTitlefooter: {
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});
interface reportdata {
    report: string;
    patient: string;
}
const PdfDocument: React.FC<reportdata> = ({ ...reportdata }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.pagehead}>
                <Image style={styles.logo} src={hna_m3ak} />
                <Text style={styles.Date}>20/01/2024</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.reportTitle}>Report</Text>
                </View>
                <Fragment>
                    <View style={styles.employeeContainer}>
                        <Text style={styles.label}>Employee:</Text>
                        <Text>Dr. Mohamed kamal</Text>
                    </View >
                    <View style={styles.patientContainer}>
                        <Text style={styles.label}>Patient: </Text>
                        <Text >Amina amani</Text>
                    </View >
                </Fragment>
                {/* <View style={styles.headerContainer}>
                    <View style={styles.authorContainer}>
                        <Text style={styles.billTo}>Report from:</Text>
                        <Text>{reportdata.patient}</Text></View>
                    <View style={styles.authorContainer}>
                        <Text style={styles.billTo}>Patient:</Text>
                        <Text>{reportdata.patient}</Text></View>
                    <Text>{reportdata.patient}</Text>
                    <Text>{reportdata.patient}</Text>
                    <Text>{reportdata.patient}</Text>
                </View> */}
                <View style={styles.content}>
                    <Text style={styles.text}>
                        {reportdata.report}
                    </Text>
                </View>
                <View style={styles.titleContainerfooter}>
                    <Text style={styles.reportTitlefooter}>*** Thank You ***</Text>
                </View>
            </Page>
        </Document>
    );
}
export default PdfDocument;