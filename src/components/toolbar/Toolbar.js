import {
  ExcelComponent
} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'
  toHTML() {
    return `
    <div class="button">
    <i class="material-icons">format_align_left</i>
    </div>
    <!-- end button -->
    <div class="button">
      <i class="material-icons">format_align_center</i>
    </div>
    <!-- end button -->
    <div class="button">
      <i class="material-icons">format_align_right</i>
    </div>
    <!-- end button -->
  <div class="button">
      <i class="material-icons">format_bold</i>
    </div>
    <!-- end button -->
    <div class="button">
      <i class="material-icons">format_italic</i>
    </div>
  <!-- end button -->
    <div class="button">
      <i class="material-icons">format_underline</i>
    </div>
    <!-- end button -->
    `
  }
}
