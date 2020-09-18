<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

    <@wcm.menu />

    <!-- Wrapper -->
    <div class="wcm-all-content fluig-style-guide">
        <div id="wcm-content" class="clearfix wcm-background">

            <!-- Your content here -->         

			<div class="row">
	            <!-- Slot 1 -->
	            <div class="col-md-12">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
					</div>
				</div>
			</div>
			
			<div class="row">
	            <!-- Slot 2 -->
	            <div class="col-md-6">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 3 -->
	            <div class="col-md-6">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot003" decorator="false" editableSlot="true" />
					</div>
				</div>
			</div>
			
			<div class="row">
	            <!-- Slot 4 -->
	            <div class="col-md-4">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot004" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 5 -->
	            <div class="col-md-4">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot005" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 6 -->
	            <div class="col-md-4">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot006" decorator="false" editableSlot="true" />
					</div>
				</div>
			</div>
			
			<div class="row">
	            <!-- Slot 7 -->
	            <div class="col-md-2">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot007" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 8 -->
	            <div class="col-md-2">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot008" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 9 -->
	            <div class="col-md-2">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot009" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 10 -->
	            <div class="col-md-2">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot010" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 11 -->
	            <div class="col-md-2">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot011" decorator="false" editableSlot="true" />
					</div>
				</div>
				
				<!-- Slot 12 -->
	            <div class="col-md-2">
		            <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
					    <@wcm.renderSlot id="Slot012" decorator="false" editableSlot="true" />
					</div>
				</div>
			</div>

            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
    </div>
</div>