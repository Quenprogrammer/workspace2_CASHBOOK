import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() {}

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

      const blob = new Blob([csvData], { type: 'text/csv' });
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

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

      FileSaver.saveAs(blob, `${filename}.xlsx`);
    });
  }

  /*// ✅ Download as PDF
  downloadPDF(data$: Observable<any[]>, fields: string[], filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      const doc = new jsPDF();
      doc.text('Transactions', 14, 10);

      const tableData = data.map((item, index) =>
        [index + 1, ...fields.map(field => item[field] ?? '')]
      );

      autoTable(doc, {
        head: [['SN', ...fields.map(field => field.toUpperCase())]],
        body: tableData,
      });

      doc.save(`${filename}.pdf`);
    });
  }
*/
  // ✅ Download as JSON
  downloadJSON(data$: Observable<any[]>, filename: string) {
    data$.subscribe(data => {
      if (!data || data.length === 0) {
        alert('No data available to download.');
        return;
      }

      const jsonData = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });

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

      const blob = new Blob([textData], { type: 'text/plain' });
      FileSaver.saveAs(blob, `${filename}.txt`);
    });
  }
}
