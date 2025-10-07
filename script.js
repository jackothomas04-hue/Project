diff --git a/script.js b/script.js
index 8b137891791fe96927ad78e64b0aad7bded08bdc..2a9eaa3e55c5b860d938f5c687c1c180bc0de170 100644
--- a/script.js
+++ b/script.js
@@ -1 +1,187 @@
+/**
+ * AI Automation Agent Blueprint Generator
+ *
+ * This script provides a structured plan for implementing AI-driven automation agents
+ * tailored to different small-business verticals. Each blueprint outlines core
+ * responsibilities, recommended integrations, suggested AI capabilities, and
+ * implementation milestones.
+ */
 
+/**
+ * Returns a blueprint describing how to build an automation agent for a given industry.
+ * @param {string} industry - One of "property_management", "hair_salon", "restaurant".
+ * @returns {object} Plan with goals, automations, integrations, and phased roadmap.
+ */
+function getAutomationBlueprint(industry) {
+  const plans = {
+    property_management: {
+      goals: [
+        "Streamline tenant communications and maintenance handling",
+        "Automate rent collection reminders and delinquency follow-up",
+        "Provide portfolio insights to managers via dashboards"
+      ],
+      automations: [
+        "AI assistant triages tenant requests, categorizes urgency, and dispatches vendors",
+        "Conversational agent handles FAQs (lease terms, policies, amenity availability)",
+        "Predictive analytics flags units at risk of churn or late payment"
+      ],
+      integrations: [
+        "Property management system (AppFolio, Buildium, Yardi)",
+        "Accounting/ERP (QuickBooks, Xero)",
+        "Communication channels (email, SMS gateways, voice IVR)"
+      ],
+      roadmap: [
+        {
+          phase: "Discovery",
+          tasks: [
+            "Audit existing workflows and identify automation candidates",
+            "Consolidate data sources (leases, maintenance logs, payment history)",
+            "Define KPI targets (response time, occupancy, delinquency rate)"
+          ]
+        },
+        {
+          phase: "MVP",
+          tasks: [
+            "Deploy tenant-facing chatbot integrated with ticketing system",
+            "Implement automated rent reminder cadences with escalation rules",
+            "Build manager dashboard with live SLA tracking"
+          ]
+        },
+        {
+          phase: "Expansion",
+          tasks: [
+            "Introduce vendor marketplace matching and scheduling",
+            "Add anomaly detection for utilities and maintenance costs",
+            "Enable predictive vacancy forecasting using historical data"
+          ]
+        }
+      ]
+    },
+    hair_salon: {
+      goals: [
+        "Reduce no-shows and idle stylist time",
+        "Enhance customer experience with personalized recommendations",
+        "Automate inventory and supplier coordination"
+      ],
+      automations: [
+        "Virtual assistant manages booking, waitlists, and stylist matching",
+        "Post-visit follow-up sequences gather feedback and upsell products",
+        "Inventory agent forecasts product depletion and auto-generates purchase orders"
+      ],
+      integrations: [
+        "Salon POS/booking software (Fresha, Vagaro, Mindbody)",
+        "CRM & marketing tools (HubSpot, Mailchimp, SMS APIs)",
+        "E-commerce / supplier portals for retail products"
+      ],
+      roadmap: [
+        {
+          phase: "Discovery",
+          tasks: [
+            "Map customer journey from booking to retention",
+            "Collect historical appointment, sales, and stylist performance data",
+            "Set automation goals (no-show rate, rebooking %, retail attach rate)"
+          ]
+        },
+        {
+          phase: "MVP",
+          tasks: [
+            "Launch AI booking assistant across web, SMS, and social channels",
+            "Implement automated reminders with smart rescheduling options",
+            "Provide stylists with daily briefs (client preferences, upsell prompts)"
+          ]
+        },
+        {
+          phase: "Expansion",
+          tasks: [
+            "Introduce dynamic staffing recommendations based on demand forecasts",
+            "Add recommendation engine for product bundles and memberships",
+            "Automate supply chain alerts linked to stylist usage patterns"
+          ]
+        }
+      ]
+    },
+    restaurant: {
+      goals: [
+        "Maximize table turns while maintaining service quality",
+        "Optimize inventory and reduce food waste",
+        "Strengthen loyalty via personalized marketing"
+      ],
+      automations: [
+        "AI concierge handles reservations, waitlists, and guest communication",
+        "Kitchen coordination agent translates demand forecasts into prep lists",
+        "Demand model adjusts dynamic pricing or promotions based on traffic"
+      ],
+      integrations: [
+        "POS and reservation systems (Toast, Square, OpenTable)",
+        "Supply chain platforms and inventory sensors",
+        "Marketing channels (email, SMS, loyalty apps)"
+      ],
+      roadmap: [
+        {
+          phase: "Discovery",
+          tasks: [
+            "Review order history, staffing schedules, and supplier lead times",
+            "Identify bottlenecks in front-of-house vs back-of-house coordination",
+            "Define metrics (turnover rate, food cost %, guest satisfaction)"
+          ]
+        },
+        {
+          phase: "MVP",
+          tasks: [
+            "Deploy reservation chatbot with real-time table management",
+            "Automate daily prep sheet generation from reservation forecasts",
+            "Implement feedback loop through digital receipts and surveys"
+          ]
+        },
+        {
+          phase: "Expansion",
+          tasks: [
+            "Integrate predictive labor scheduling and smart shift swaps",
+            "Add computer vision audits for portion control and waste tracking",
+            "Launch loyalty AI that triggers targeted offers based on visit frequency"
+          ]
+        }
+      ]
+    }
+  };
+
+  if (!plans[industry]) {
+    throw new Error(`Unsupported industry: ${industry}. Choose one of ${Object.keys(plans).join(', ')}`);
+  }
+
+  return plans[industry];
+}
+
+/**
+ * Helper to pretty-print a blueprint to stdout.
+ * @param {object} blueprint - Result from getAutomationBlueprint.
+ */
+function printBlueprint(blueprint) {
+  const indent = (level = 0) => '  '.repeat(level);
+  const printList = (items, level = 1) =>
+    items.map((item) => `${indent(level)}- ${item}`).join('\n');
+
+  console.log('Goals:\n' + printList(blueprint.goals));
+  console.log('\nAutomations:\n' + printList(blueprint.automations));
+  console.log('\nIntegrations:\n' + printList(blueprint.integrations));
+
+  console.log('\nRoadmap:');
+  blueprint.roadmap.forEach((phase) => {
+    console.log(`${indent(1)}* ${phase.phase}`);
+    console.log(printList(phase.tasks, 2));
+  });
+}
+
+// If executed directly via `node script.js <industry>` print the requested plan.
+if (require.main === module) {
+  const industry = process.argv[2];
+  try {
+    const blueprint = getAutomationBlueprint(industry);
+    printBlueprint(blueprint);
+  } catch (error) {
+    console.error(error.message);
+    process.exitCode = 1;
+  }
+}
+
+module.exports = { getAutomationBlueprint, printBlueprint };
