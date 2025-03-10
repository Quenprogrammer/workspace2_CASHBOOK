import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DownloadDataService,} from '../../../../services/downloadData/download-data.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-download-data-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './download-data-component.component.html',
  styleUrl: './download-data-component.component.css'
})
export class DownloadDataComponentComponent {
  @Input() fileContent: string = 'Default content to download.';
  selectedFormat: string = 'text';

  constructor(private downloadService: DownloadDataService) {}

  downloadFile() {
    this.downloadService.downloadFileWithContent(this.selectedFormat, this.fileContent);
  }
}
