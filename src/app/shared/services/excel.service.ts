import { Injectable } from '@angular/core';
import * as fs from 'file-saver';
import { Workbook } from 'exceljs';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }
  generateExcel(userList) {

    // const header = Object.keys(userList[0])
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('User Report')
    // Add new row
    const titleRow =['Codigo UNI', 'Apellido Paterno', 'Apellido Materno', 'Nombre',
      's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14', 's15', 's16'
    ]
    // Set font family, font size, and style in title row.
    // titleRow.font = { name: 'Saysettha OT' family: 4, size: 16, bold: true }
    // Blank Row
    // // Add Header Row
    const headerRow = worksheet.addRow(titleRow)
    // Cell Style : Fill and Border
   
    worksheet.getRow(1).font = { name: 'Roboto', family: 4, size: 16, bold: true };
    // Add Data and Conditional Formatting
    userList.forEach(d => {
      let row = worksheet.addRow(Object.values(d))
      // row.font = { name: ‘Saysettha OT’ }
    })
    workbook.xlsx.writeBuffer().then(excelData => {
      const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      fs.saveAs(blob, 'UserReport.xlsx')
    })
  }
}
