import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType
} from 'docx';
import {address, CEOName, companyName, email, LGA, phone, website} from '../features/data/companyInformation';
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() {
  }

  // ✅ Download as CSV
  downloadCSV(data$: Observable<any[]>, fields: string[], filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      let csvData = fields.join(',') + '\n'; // CSV Header

      data.forEach((item, index) => {
        let row = fields.map(field => item[field] ?? '').join(',');
        csvData += `${index + 1},${row}\n`; // Add data row
      });

      const blob = new Blob([csvData], {type: 'text/csv'});
      FileSaver.saveAs(blob, `${filename}.csv`);
    });
  }

  // ✅ Download as Excel
  downloadExcel(data$: Observable<any[]>, filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

      const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
      const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});

      FileSaver.saveAs(blob, `${filename}.xlsx`);
    });
  }

  downloadPDF(data$: Observable<any[]>, fields: string[], filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.text('Transaction Report', 14, 15);

      // Prepare table data
      const tableHead = [['SN', ...fields.map(field => field.toUpperCase())]];
      const tableBody = data.map((item, index) =>
        [index + 1, ...fields.map(field => item[field] ?? '')]
      );

      autoTable(doc, {
        startY: 25,
        head: tableHead,
        body: tableBody,
        styles: {fontSize: 10},
        headStyles: {fillColor: [41, 128, 185]}, // Blue header
        margin: {top: 20, left: 10, right: 10},
      });

      doc.save(`${filename}.pdf`);
    });
  }

  downloadJSON(data$: Observable<any[]>, filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      const jsonData = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonData], {type: 'application/json'});

      FileSaver.saveAs(blob, `${filename}.json`);
    });
  }

  // ✅ Download as TXT
  downloadTXT(data$: Observable<any[]>, filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      let textData = '';

      data.forEach((item, index) => {
        textData += `SN: ${index + 1}\n`;
        Object.keys(item).forEach(key => {
          textData += `${key.toUpperCase()}: ${item[key]}\n`;
        });
        textData += `------------------------\n`;
      });

      const blob = new Blob([textData], {type: 'text/plain'});
      FileSaver.saveAs(blob, `${filename}.txt`);
    });
  }

  downloadWord(data$: Observable<any[]>, fields: string[], filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      // ✅ Create header row with bold TextRun
      const headerRow = new TableRow({
        children: fields.map(field =>
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({text: field.toUpperCase(), bold: true})]
              })
            ],
            width: {size: 25, type: WidthType.PERCENTAGE}
          })
        )
      });

      // ✅ Create data rows
      const dataRows = data.map(item =>
        new TableRow({
          children: fields.map(field =>
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: String(item[field] ?? '')})]
                })
              ],
              width: {size: 25, type: WidthType.PERCENTAGE}
            })
          )
        })
      );

      // ✅ Construct the document
      const table = new Table({
        rows: [headerRow, ...dataRows]
      });

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [new TextRun({text: 'Transaction Report', bold: true, size: 28})],
                spacing: {after: 200}
              }),
              table
            ]
          }
        ]
      });

      // ✅ Generate and download the Word document
      Packer.toBlob(doc).then(blob => {
        FileSaver.saveAs(blob, `${filename}.docx`);
      }).catch(err => {
        console.error('Failed to generate Word file:', err);
        alert('Error generating Word document.');
      });
    });
  }


  downloadSingleTransactionPDF(account: {
    date?: string;
    payee?: string;
    type?: string;
    amount?: number;
    referenceNumber?: string;
    description?: string;
  }, fileName: string = 'transaction-details') {
    const doc = new jsPDF();

    doc.setFontSize(25);
    doc.text(companyName, 105, 25, {align: 'center'});

    doc.setFontSize(17);
    doc.text(address, 105, 32, {align: 'center'});

    doc.setFontSize(13);
    doc.text(email, 105, 38, {align: 'center'});

    doc.setFontSize(12);
    doc.text('Transaction Details', 70, 55, {align: 'right'});

    const rows = [
      ['Date', account.date || ''],
      ['Payee', account.payee || ''],
      ['Type', account.type || ''],
      ['Amount', `${account.amount?.toLocaleString() || '0'}`],
      ['Reference', account.referenceNumber || ''],
      [' ',],
      [' ',],
      [' ',],
      [' ',],
      ['Signature', '___________________________'],
      ['', CEOName],  // CEO Name will also be centered
    ];

    autoTable(doc, {
      startY: 60,
      head: [['Field', 'Value']],
      body: rows,
      theme: 'plain',  // Set the theme to 'plain' to remove stripes
      headStyles: {
        fillColor: [0, 123, 255],
        halign: 'left'
      },
      columnStyles: {
        0: {cellWidth: 55, halign: 'left'},  // Keep the 'Field' column left aligned
        1: {cellWidth: 130, halign: 'left'}  // Keep the 'Value' column left aligned
      },
      styles: {
        fontSize: 14,
        cellPadding: 5,
        minCellHeight: 16,
        valign: 'middle'
      },
      didParseCell: function (data: any) {
        // TypeScript types the data as 'any' to resolve the issue
        if (Array.isArray(data.row.raw) && data.row.raw[0] === 'Signature') {
          data.cell.styles.halign = 'center'; // Center-align 'Signature'
        }

        // Center-align CEO's name row (second part of the signature)
        if (data.row.raw[0] === '') {
          data.cell.styles.halign = 'center'; // Center-align CEO Name
        }

        // Set custom font size and color for 'Description' if necessary
        if (Array.isArray(data.row.raw) && data.row.raw[0] === 'Description') {
          data.cell.styles.fontSize = 10;
          data.cell.styles.textColor = [255, 0, 0]; // Set text color to red (RGB: 255, 0, 0)
        }
      }
    });

    doc.save(`${fileName}.pdf`);
  }
}
