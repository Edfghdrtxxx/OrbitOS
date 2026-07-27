# Nuclear power plant lifespan

## Export metadata (verbatim)

```json
{
  "uuid": "469d1c8e-b1af-4d56-afd6-c478680536ff",
  "name": "Nuclear power plant lifespan",
  "summary": "**Conversation Overview**\n\nThe person asked a general informational question about the lifespan of nuclear power plants. Claude provided a detailed, structured response covering the regulatory framework governing plant lifespans, primarily using the United States as the reference case. The response explained the progression from the original 40-year operating license issued by the Nuclear Regulatory Commission (NRC), through first license renewal extending operation to 60 years, to Subsequent License Renewal (SLR) allowing up to 80 years of operation. Claude also noted early-stage discussions about the possibility of 100-year operational licenses. The response included a summary table, current U.S. fleet statistics (average age approximately 42 years as of mid-2024, with Nine Mile Point Unit 1 as the oldest operating reactor), and a practical caveat that economic viability can cause early shutdowns independent of technical or regulatory limits, citing 13 reactor retirements since 2013. No follow-up questions or corrections were provided by the person, and the conversation consisted of a single exchange.",
  "created_at": "2026-03-31T01:03:51.921648Z",
  "updated_at": "2026-03-31T01:04:16.427996Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-31T01:03:53.176288Z

Generally speaking, how long is the lifespan of a nuclear power plant?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d416b-1e2c-718e-b692-4b454905001f",
  "updated_at": "2026-03-31T01:03:53.176288Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-31T01:04:16.419525Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about the lifespan of nuclear power plants. This is a factual question I can answer well from my knowledge without needing a web search, as this is relatively stable information. Let me provide a well-sourced answer.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-31T01:03:55.226823Z",
  "stop_timestamp": "2026-03-31T01:03:55.424479Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017FUwwtFam7sPf3nJac5rbQ",
  "name": "web_search",
  "input": {
    "query": "nuclear power plant design lifespan license extension"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_017FUwwtFam7sPf3nJac5rbQ",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Almost all U.S. nuclear plants require life extension past 60 years to operate beyond 2050 - U.S. Energy Information Administration (EIA)",
      "url": "https://www.eia.gov/todayinenergy/detail.php?id=19091",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "eia.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=eia.gov",
        "site_name": "U.S. Energy Information Administration"
      },
      "is_missing": false,
      "text": "In making the decision to extend the operating lives of nuclear reactors beyond 60 years, the NRC will consider the long-term safety and security of continued reactor operation. In addition to the NRC, the U.S. Department of Energy, through ...\n\nWhen nuclear power plants are built, the Nuclear Regulatory Commission (NRC) has the authority to issue initial operating licenses for a period of 40 years. Beyond that, the reactors need license renewals, and the NRC has granted 20-year license renewals to 74 of the 100 operating reactors in the United States. These reactors may now operate for a total period of 60 years. They represent a cumulative capacity of a little more than 69,000 megawatts (MW). The NRC is currently reviewing license renewal applications for an additional 17 reactors, and expects to receive seven more applications in the next few years. With the bulk of the existing nuclear fleet licensed before 1990, nearly all existing reactors will be more than 60 years old by 2050. Unless a utility applies for and receives a Subsequent License Renewal (SLR) that could further extend the operating lives of their reactors up to 20 additional years, the reactors will not generate power beyond age 60.\n\nFrom a regulatory perspective, the NRC determined in August 2014 that existing license renewal regulations were sufficient to support the SLR process. The NRC's determination was supported by the May 2014 findings of the NRC's Advisory Committee on Reactor Safeguards, which stated that the current NRC license renewal framework would support SLR. In making the decision to extend the operating lives of nuclear reactors beyond 60 years, the NRC will consider the long-term safety and security of continued reactor operation. In addition to the NRC, the U.S. Department of Energy, through its Light Water Reactor Sustainability Program, is one of several organizations studying the effects of aging on nuclear power plant systems, structures, and components. Other industry groups involved in studying SLR include the Electric Power Research Institute and the Nuclear Energy Institute.\n\nInternational groups, such as the International Atomic Energy Agency and the Organization for Economic Cooperation and Development's Nuclear Energy Agency, are also involved in addressing life extension issues in support of nuclear power plants around the world. U.S. utilities already make significant investments in maintaining and upgrading the current fleet of U.S. nuclear power plants to ensure safe, secure, and reliable operation throughout their 40- or 60-year lifetimes.\n\nThe Electric Utility Cost Group estimated that the industry invested $6.4 billion in capital projects to upgrade and maintain nuclear power plant systems during 2013.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.eia.gov/todayinenergy/detail.php?id=19091",
        "search_provider": "anthropic",
        "age": "December 8, 2014"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Going Long Term: US Nuclear Power Plants Could Extend Operating Life to 80 Years",
      "url": "https://www.iaea.org/newscenter/news/going-long-term-us-nuclear-power-plants-could-extend-operating-life-to-80-years",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "iaea.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=iaea.org",
        "site_name": "IAEA"
      },
      "is_missing": false,
      "text": "The US Nuclear Regulatory Commission (NRC) issues licences for nuclear power plants to operate for up to 40 years and allows licences to be renewed for up to 20 years with every renewal application, as long as operators prove that the effects ...\n\nThe last couple of decades have witnessed increased interest in the extension of the operating life of nuclear power plants. Extending the life of a plant is more economical than building a new one, and where it makes business sense, many plant operators in the United States are seeking licence renewals. ... Surry Power Station was the first plant to notify the US Nuclear Regulatory Commission of plans to submit an application for subsequent licence renewal. (Photo: NEI) The last couple of decades have witnessed increased interest in the extension of the operating life of nuclear power plants. Extending the life of a plant is more economical than building a new one, and where it makes business sense, many plant operators in the United States are seeking licence renewals. This helps avoid supply shortages and support the country in reducing carbon emissions.\n\nThe IAEA has benefited from NRC support in its long-term operation (LTO) activities. The NRC was an early funder and active participant in the IAEA International Generic Ageing Lessons Learned (IGALL) programme, which used technical information from the NRC’s Generic Ageing Lessons Learned report as its starting point. Other IAEA Member States added data for their plants to that US information, including information for pressurized heavy water reactor designs. The USA has been an active participant in other IAEA activities related to LTO, including the development of safety guides on ageing management and LTO and presenting LTO workshops for international regulators and plants. The US also continues to provide expertise during IAEA Safety Aspects of Long-Term Operation (SALTO) missions to countries in Europe, Asia, North and South America. ... Nuclear power for a clean-energy future, IAEA Bulletin (Vol.\n\nThe US Nuclear Regulatory Commission (NRC) issues licences for nuclear power plants to operate for up to 40 years and allows licences to be renewed for up to 20 years with every renewal application, as long as operators prove that the effects of ageing on certain plant structures and components will be adequately managed. About 90 percent of US plants have already renewed their licences once, extending their operation to 60 years. But most of these will soon reach the end of their 60-year term. If they cease to operate or are not replaced by new plants, the percentage of energy generated from nuclear will drop. A subsequent renewal extends a plant’s operation from 60 to 80 years. Nuclear provides 20 percent of the United States’ electricity supply and more than 60 percent of the country’s CO2 emissions-free generation. Electricity demand is expected to rise by more than 30 percent by 2035.\n\n“If a subsequent renewal is granted and plants are allowed to operate for 80 years, NRC could see increased interest by other utilities,” said Allen Hiser, Senior Technical Advisor for Licence Renewal Ageing Management at NRC. “NRC experienced a similar trend when the original licence renewals were granted back in 2000.” · Most US Government policies favour renewables over nuclear, and according to Korsnick the market does not value all of the attributes that the nuclear plants bring. Three plants in the past six years have already shut down even before their original licence expired because they could not make sufficient money in the current market place. Korsnick maintains that the markets must be improved so that they value the products that nuclear is bringing — products that include clean air, constant 24/7 power and continuous operation for at least 18 months before needing to refuel.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.iaea.org/newscenter/news/going-long-term-us-nuclear-power-plants-could-extend-operating-life-to-80-years",
        "search_provider": "anthropic",
        "age": "July 15, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "License Renewal and Long-Term Operation (LTO) of Nuclear Power Plants | Jensen Hughes",
      "url": "https://www.jensenhughes.com/insights/license-renewal-and-long-term-operation-lto-of-nuclear-power-plants",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "jensenhughes.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=jensenhughes.com",
        "site_name": "Jensen Hughes"
      },
      "is_missing": false,
      "text": "Several U.S. nuclear plants are currently pursuing extensions to operate for up to 80 years, demonstrating the feasibility of long-term operation under strict regulatory supervision.\n\nThe license renewal process for nuclear power plants is a rigorous procedure designed to extend the operational life of nuclear reactors beyond their originally projected lifespan. In the United States, this process typically begins well before the plant’s original 40-year license expires, often extending the license by 20 years or more. In most European countries, the approach is slightly different since the regulatory framework is based on periodic safety reviews (PSRs). U.S. License Renewal Process · The U.S. approach to license renewal is heavily regulated, with the Nuclear Regulatory Commission (NRC) overseeing the process. Nuclear plant operators must submit a comprehensive renewal application, which includes detailed technical and safety analyses. The NRC evaluates this application to ensure the plant’s critical systems continue operating safely.\n\nAs global energy policies evolve, interest in extending the operational life of nuclear power plants has gained momentum. Whether through formal license renewals, as seen in the United States, or periodic safety reviews in Europe, utilities and regulatory bodies must prioritize safety, aging management, and technological advancement in nuclear plants. Jensen Hughes is highly experienced in the high-level strategic and technical planning required for the long-term operation of nuclear plants. Using our experience to inform aging management programs and life extension strategies, our team of experts delivers the critical guidance necessary for successful LTO projects. Discover more about how we support the life extension and LTO of nuclear facilities, helping to ensure the reliable and secure operation of nuclear plants beyond their original design life.\n\nDelve deeper into nuclear power license renewals, with U.S. plants extending licenses by 20 years, while Europe relies on periodic safety reviews (PSRs).\n\nInstead, safety reviews after a certain plant age would be augmented to address long-term operational issues. However, guidelines for these assessments are still under development. Importance of Strategic and Technical Planning in the LTO Process · High-level strategic and technical planning is necessary to navigate the significant physical modifications and testing required for the LTO process and ensure a successful project. A high-level strategic and implementation plan for LTO requires developing an overall strategy for life extension, which may include feasibility studies, aging management plans and initial safety assessments. Moreover, the technical work plan outlines the tasks required to implement the LTO, including safety analyses, component upgrades, engineering design and quality assurance protocols. Long-term operation or life extension of nuclear plants requires thorough planning and execution.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.jensenhughes.com/insights/license-renewal-and-long-term-operation-lto-of-nuclear-power-plants",
        "search_provider": "anthropic",
        "age": "September 26, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Backgrounder on Reactor License Renewal | Nuclear Regulatory Commission",
      "url": "https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/fs-reactor-license-renewal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nrc.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nrc.gov",
        "site_name": "NRC"
      },
      "is_missing": false,
      "text": "Fifty-eight entered their extended period of operation; eight of those have since ceased operations. An additional reactor with a renewed license shut down before reaching 40 years of operation. The NRC and the industry are currently focusing on &quot;subsequent license renewals,&quot; which authorizes ...\n\nThe decision to seek license renewal rests entirely with nuclear power plant owners. This choice is typically based on the plant’s economic situation and whether it can meet NRC requirements. Each power reactor is licensed based on a specific set of requirements, depending primarily on its design. This set of requirements is called the plant’s “licensing basis.” The license renewal review process provides continued assurance that the current licensing basis will maintain an acceptable level of safety for the period of extended operation. As of January 2022, the NRC has renewed the operating licenses of 94 commercial nuclear reactors. Fifty-eight entered their extended period of operation; eight of those have since ceased operations. An additional reactor with a renewed license shut down before reaching 40 years of operation. The NRC and the industry are currently focusing on \"subsequent license renewals,\" which authorizes plants to operate beyond the 60 years of the initial license and\n\nThe inspections sample the results used by the licensee to identify those structures and components within the scope of license renewal, aging management programs, and design analysis changes. NRC staff perform an additional inspection after the license is renewed, typically prior to entering the period of extended operation. This inspection verifies that the license conditions, license renewal commitments and aging management programs are implemented. Inspection results are documented in a publicly available report. Environmental protection regulations were revised in 1996 to facilitate the environmental review for license renewal. Certain issues are evaluated generically for all plants, rather than separately in each plant’s renewal application. The generic evaluation, NUREG-1437, “Generic Environmental Impact Statement for License Renewal of Nuclear Plants,” assesses the scope and impact of environmental effects associated with license renewal at any nuclear plant site, such as enda\n\nShortly after the NRC receives a renewal application, a public meeting is held near the plant. This meeting provides local stakeholders information about the license renewal process and opportunities for public involvement. This meeting is also used to solicit input on the scope of NRC’s environmental review. Additional public meetings are held by the NRC during the review of the renewal application. NRC evaluations, findings and recommendations are published and posted on the NRC’s website when completed. All public meetings are posted on NRC’s Public Meetings and Involvement page. Key meetings are announced in press releases and in the Federal Register. In addition, anyone who may be adversely affected by the license renewal may request an adjudicatory hearing before an NRC Atomic Safety and Licensing Board. Finally, members of the public may petition the Commission for consideration of issues other than aging during the license renewal process. A nuclear power plant licensee may app\n\nSubsequent license renewals are also for 20 years. The NRC has developed guidance for staff and licensees specifically for the subsequent renewal period. The first subsequent license renewal application, for the Turkey Point Units 3 and 4 reactors, was submitted to the NRC in January 2018. The NRC issued the Turkey Point renewal in December 2019. As of January 2022, the NRC has issued subsequent renewed licenses for six reactors, and applications are under review for an additional nine reactors. In 1982, the NRC established a comprehensive program for nuclear plant aging research. These research results concluded that most nuclear plant aging issues are manageable and do not pose technical issues that would prevent them for operating additional years beyond their original 40-year license period. In 1991, the NRC published safety requirements for license renewal as 10 CFR Part 54.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/fs-reactor-license-renewal",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Subsequent License Renewal: Extending Nuclear Power Reactors to 80 Years of Operation (and Maybe More)",
      "url": "https://www.powermag.com/subsequent-license-renewal-extending-nuclear-power-reactors-to-80-years-of-operation-and-maybe-more/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "powermag.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=powermag.com",
        "site_name": "POWER Magazine"
      },
      "is_missing": false,
      "text": "As of June 15, 2023, 87 of the 92 commercially operating nuclear reactors in the U.S. have had their licenses extended to 60 years. Furthermore, 16 reactors have applied for subsequent license renewal (SLR), which would authorize units to operate ...\n\nIn addition, the quality of the application, the complexity of the review, applicant timeliness in responding to requests for additional information, and the coordination of the timing for on-site audits and inspections may all affect the review timeline. If the licensee submits a renewal application at least five years before expiration of its current license and the agency is still reviewing the application at the expiration date, the plant can continue to operate until the NRC completes its review. However, if a sufficient application is not submitted at least five years before the current license expires, the plant may have to stop operating if the license expires before a renewal decision is made. Notably, 80 years may not be the end of the line for nuclear plants. “It’s very preliminary, but there are conversations occurring in different pockets like EPRI—even the NRC—that I think have to do with ‘Okay, what does a 100-year extension look like?’ ” said Sivaraman.\n\nThe decision to seek license renewal rests entirely with nuclear power plant owners. The NRC says economic and antitrust considerations determined the original 40-year term for reactor licenses, not limitations of nuclear technology. Each power reactor is licensed based on a specific set of requirements, depending primarily on its design. This set of requirements is called the plant’s “licensing basis.” The license renewal review process provides continued assurance that the current licensing basis will maintain an acceptable level of safety for the period of extended operation. As of June 15, 2023, 87 of the 92 commercially operating nuclear reactors in the U.S. have had their licenses extended to 60 years. Furthermore, 16 reactors have applied for subsequent license renewal (SLR), which would authorize units to operate for another 20 years beyond the 60 years of the initial license and the first renewal.\n\nSLRs were issued for six reactors—Turkey Point Units 3 and 4, Peach Bottom Units 2 and 3, and Surry Units 1 and 2—however, in February 2022, the Turkey Point and Peach Bottom approvals were reversed based on a technicality. The reversal followed a successful challenge by four environmental groups that claimed the NRC’s reliance on the “Generic Environmental Impact Statement for License Renewal of Nuclear Plants” used in the approval process did not apply to SLRs. Therefore, the Surry units are currently the only reactors in the U.S. licensed to operate for up to 80 years. Owners of at least nine other reactors have informed the NRC that they intend to submit SLR applications. Among them is the Tennessee Valley Authority (TVA), which has said it plans to submit SLR applications for its Browns Ferry reactors by December 2023. The Browns Ferry site (Figure 1) comprises three boiling water reactors (BWRs) located near Athens, Alabama.\n\nManu Sivaraman, site vice president for the Browns Ferry Nuclear Plant, talked about the SLR process as a guest on The POWER Podcast. “There’s a lot of analysis that you do when you’re going to submit for a license renewal, especially a second license renewal,” he said. “So, number one is we benchmarked other sites that have done a 60 to 80 license application, because it’s not like this has been done hundreds of times. There’ve been a few sites that have done it, some similar to ours—a boiling water—so we took all those lessons learned and then built the project plan around: ‘How did everybody else do it?’ ” · According to the NRC, the license renewal process proceeds along two tracks—one for review of safety issues (10 Code of Federal Regulations [CFR] Part 54) and another for environmental issues (10 CFR Part 51). “An applicant must address the technical aspects of plant aging and describe how those effects will be managed.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.powermag.com/subsequent-license-renewal-extending-nuclear-power-reactors-to-80-years-of-operation-and-maybe-more/",
        "search_provider": "anthropic",
        "age": "June 15, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What's the Lifespan for a Nuclear Reactor? Much Longer Than You Might Think | Department of Energy",
      "url": "https://www.energy.gov/ne/articles/whats-lifespan-nuclear-reactor-much-longer-you-might-think",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "energy.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=energy.gov",
        "site_name": "Department of Energy"
      },
      "is_missing": false,
      "text": "The majority of these will expire in the 2030s. Due to the amount of time it takes to prepare for regulatory reviews, utilities are now determining if they should apply for an additional 20 years of service.\n\nThanks to research performed over the last decade by the U.S. Department of Energy (DOE) and the Electric Power Research Institute (EPRI), utilities now have the confidence and data they need to apply for a second 20-year operating license with the Nuclear Regulatory Commission (NRC). Seven plants (15 reactors) have already submitted subsequent license renewal (SLR) applications and more are expected as more reactors near the end of their operating licenses · That would keep nearly a quarter of the nation’s fleet online beyond 2050. ... WATCH: Research demonstrates no technical limits for reactors operating up to 80 years. ... Eighty-eight of America’s 92 reactors have received approval of their first 20-year extension. The majority of these will expire in the 2030s. Due to the amount of time it takes to prepare for regulatory reviews, utilities are now determining if they should apply for an additional 20 years of service.\n\nNearly 10 years of research is giving U.S. nuclear companies the data and confidence they need to operate up to 80 years.\n\nResearch shows no technical reason why nuclear power plants can't operate for 80 years or more\n\nMore are expected to apply in the future as they get closer to the end of their operating licenses. America has the largest fleet of reactors in the world. Nuclear energy generates nearly 778 billion kilowatt hours of electricity each year and makes up more than half of the nation’s clean energy. It operates at full power more than 92% of the time and has provided roughly a fifth of the nation’s power since the mid-'90s. Despite this performance, 13 reactors have retired since 2013 due to challenging market conditions, and an additional seven units are slated to shut down by 2025. Losing these reactors would ultimately reduce America’s large-scale supply of affordable and dependable clean power, as well as deplete the expertise, knowledge, and supply chain that goes along with the entire U.S. nuclear industry. In addition to materials research, the LWRS program is working on modernizing plant systems to reduce operation and maintenance costs, while also looking to diversify plant produ",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.energy.gov/ne/articles/whats-lifespan-nuclear-reactor-much-longer-you-might-think",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "License Renewals Could Modernize U.S. Nuclear; Supply Base Will Need to Keep Pace",
      "url": "https://www.powermag.com/license-renewals-could-modernize-u-s-nuclear-supply-base-will-need-to-keep-pace/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "powermag.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=powermag.com",
        "site_name": "POWER Magazine"
      },
      "is_missing": false,
      "text": "These reactor licenses hold an initial term of 40 years, and the majority of operating U.S. commercial nuclear power plants have obtained an initial license renewal to extend reactor lifetime from 40 to 60 years.\n\nThe U.S. Nuclear Regulatory Commission (NRC), the country’s regulating body for nuclear power operations, dictates that all nuclear reactors require a license to operate. These reactor licenses hold an initial term of 40 years, and the majority of operating U.S. commercial nuclear power plants have obtained an initial license renewal to extend reactor lifetime from 40 to 60 years. These plants will reach the end of their respective licensing periods as early as 2026 (Indian Point 3’s initial license renewal expires in 2025 but it will close early in 2021). As license expiration dates draw nearer (Figure 1), plants have begun preparations for a second renewal of their licenses, also known as an SLR. These subsequent renewals extend a reactor’s operations from 60 to 80 years, effectively doubling the original licensed lifespan. In December 2019, Turkey Point Units 3 and 4 were granted SLR approval, establishing the two reactors as the first to be licensed for 80 years in the U.S.\n\nNuclear power plants approaching license expiration are faced with three options: obtain initial license renewal to continue operations (nine U.S. units have not yet received an extension of their initial license), obtain subsequent license renewal, or discontinue operations. Nuclear plant equipment suppliers hang in the balance, as investments in new technology hinge on the industry’s long-term prospects. By 2040, more than half of the U.S.’s 95 operating reactors will have reached the end of their current license period. Over the past year, four nuclear reactors have received subsequent license renewal (SLR) approval. Seven reactors have pending applications currently under review or scheduled for submission by the end of 2021, and eight additional reactors have announced plans to submit SLR applications. This recent SLR activity, however, accounts for only 20% of the country’s operating nuclear reactors.\n\nAnalysis and Measurement Services Corp. (AMS) is a nuclear engineering consulting firm headquartered in Knoxville, Tennessee. President and CEO H.M. “Hash” Hashemian described AMS’s strategy for supporting plants as they prepare for SLR: “AMS is supporting license extension activities with advanced testing services as well as leading-edge technology. Over the last 10 years, AMS has developed in-situ low-voltage cable condition monitoring technologies and have successfully applied them to nuclear power plants to identify if and when aged cables must be repaired or replaced. We can sit in the control room and send signals through cables and diagnose from the reflected signal if and where a cable insulation material may be faulty and what to do to fix it. Additionally, online monitoring to catch drift of pressure, level, and flow transmitters is at the forefront of the nuclear industry’s efforts today to save calibration costs.\n\nCurtiss-Wright, a power industry supplier, has expanded its portfolio with digital platforms that fulfill plant efficiency and maintenance objectives. “Despite nuclear industry challenges, SLRs present a unique opportunity for suppliers. Licensing extension has renewed the industry’s focus on R&D and innovation—particularly in the digital space,” commented Kurt Mitchell, vice president and general manager of Curtiss-Wright’s Nuclear Division. “In line with plant-wide automation and modernization goals, Curtiss-Wright has developed robust, flexible, and digitally diverse control system offerings for non-safety-related and safety-related applications. Our portfolio features a balance of innovative technologies—such as equipment anomaly detection and advanced pattern recognition—and proven solutions like our condition monitoring and thermal performance platforms.” ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.powermag.com/license-renewals-could-modernize-u-s-nuclear-supply-base-will-need-to-keep-pace/",
        "search_provider": "anthropic",
        "age": "August 3, 2020"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How long can a nuclear plant run? Regulators consider 100 years | Utility Dive",
      "url": "https://www.utilitydive.com/news/how-long-can-a-nuclear-plant-run-regulators-consider-100-years/597294/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "utilitydive.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=utilitydive.com",
        "site_name": "Utility Dive"
      },
      "is_missing": false,
      "text": "Four reactors — two at NextEra Energy subsidiary Florida Power &amp; Light&#x27;s Turkey Point plant and two at Exelon&#x27;s Peach Bottom plant in Pennsylvania — have already received approval from the NRC to operate for up to 80 years, while six more ...\n\nFour reactors — two at NextEra Energy subsidiary Florida Power & Light's Turkey Point plant and two at Exelon's Peach Bottom plant in Pennsylvania — have already received approval from the NRC to operate for up to 80 years, while six more — four at Dominion Energy's North Anna and Surry plants in Virginia and two at NextEra Energy's Point Beach plant in Wisconsin — have asked for license extensions to 80 years. But all of these nuclear plants, like Oconee, would have to retire in the early 2050s if the NRC does not allow operation beyond 80 years. These reactors, including Oconee, add up to about 11.4 GW, which is over 11% of total U.S. nuclear capacity, based on U.S. Energy Information Administration data. Another way to replace retiring nuclear capacity is by building new types of reactors, like small modular reactors, molten salt reactors or other technologies lumped under the \"advanced reactors\" label, that have the potential to be cheaper and easier to build than conventional larg\n\nNow, nuclear regulators, industry groups and power plant owners have begun talking about the possibility of doubling these record run times and operating some U.S. nuclear plants for up to 100 years. The discussions cut quickly followed the 2019 and 2020 Nuclear Regulatory Commission approvals of the first licenses for reactors in Florida and Pennsylvania to operate for 80 years, which would themselves be unprecedented milestones. According to industry experts, with state governments, utilities and corporations setting emissions reductions targets 20 to 30 years out into in the future, the nuclear industry is experiencing pressure to tackle the technical challenges around long life extensions sooner rather than later. Many of the net zero emissions goals \"go to 2050 and beyond. The reality is, some of the reactors today will shut down in 2050 if they don't go beyond 80 years,\" nuclear industry consultant and UxC President Jonathan Hinze said.\n\nDuke's three-reactor Oconee nuclear plant in South Carolina, at 2,500 MW, is the largest single power plant in Duke's generation portfolio and makes up over 12% of Duke Energy Carolinas' self-owned power capacity. Duke has declared its intent to ask the NRC to extend the plant's 60-year licenses so it can operate for 80 years, but if granted, those new licenses would expire in 2053 for two of Oconee's reactors and in 2054 for the third. Replacing nuclear plants before their licenses expire may not be on the table at all, due to high costs and competitive pressures from other power sources. The new units under construction at Southern Co.'s Vogtle plant in Georgia, which would be the first new nuclear generation constructed in the U.S. in three decades, are still incomplete after eight years of construction, numerous delays and billions of dollars in cost overruns.\n\nIt is important sooner rather than later to figure out if existing plants can be licensed to operate beyond the 2050s, according to Brett Rampal, director of nuclear innovation for the Clean Air Task Force. \"To decarbonize our electric grid in the next 15 years is a huge lift. Existing nuclear power is more than half of U.S. clean electricity and I don't want to ask questions about a clean electricity grid without these existing nuclear assets,\" he said. The Nuclear Regulatory Commission first publicly addressed the possibility of licensing nuclear plants for 100 years of operation at a meeting in January. The staff asked in a request for comments if it should \"begin to consider the potential technical issues and the development of guidance documents to support license renewal to authorize operation for up to 100 years, and if so, when.\" The staff is still reviewing feedback from the meeting and has not made any decisions, NRC spokesperson Scott Burnell said.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.utilitydive.com/news/how-long-can-a-nuclear-plant-run-regulators-consider-100-years/597294/",
        "search_provider": "anthropic",
        "age": "March 29, 2021"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "average age of US commercial nuclear power reactors",
      "url": "https://www.eia.gov/tools/faqs/faq.php?id=228&t=3",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "eia.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=eia.gov",
        "site_name": "U.S. Energy Information Administration"
      },
      "is_missing": false,
      "text": "The U.S. Nuclear Regulatory Commission (NRC) licenses new commercial nuclear reactors to originally operate for 40 years. Before expiration of the original license, licencees can apply for a 20-year operating license extension. The NRC may subsequently grant a third 20-year operating license ...\n\nThe average age of U.S. commercial nuclear power reactors that were operational as of April 30, 2024, is about 42 years. The oldest operating reactor is Nine Mile Point Unit 1 in New York State, which entered commercial service in December 1969. The newest reactor to enter service is Vogtle Unit 4 at the Alvin W. Vogtle Electric Generating Plant in Georgia that began commercial operation on April 29, 2024. The next-youngest operating reactor is Vogtle Unit 3, which began commercial electricity generation in July 2023. The U.S. Nuclear Regulatory Commission (NRC) licenses new commercial nuclear reactors to originally operate for 40 years. Before expiration of the original license, licencees can apply for a 20-year operating license extension. The NRC may subsequently grant a third 20-year operating license extension for a total operational life of 80 years.\n\nDoes EIA have data on each power plant in the United States? U.S. Nuclear Generation and Generating Capacity Status of NRC reactor license renewal applications · Last updated: May 8, 2024. What is the outlook for home heating fuel prices this winter? How much does it cost to generate electricity with different types of power plants? Does EIA publish electric utility rate, tariff, and demand charge data? ... How much carbon dioxide is produced per kilowatthour of U.S. electricity generation? How much of U.S. carbon dioxide emissions are associated with electricity generation? How much of U.S. energy production and consumption comes from renewable energy sources? How many electric vehicles (EV) and EV charging stations are in the United States? How is electricity used in U.S. homes? ... How old are U.S. nuclear power plants, and when was the newest one built?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.eia.gov/tools/faqs/faq.php?id=228&t=3",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Status of Subsequent License Renewal Applications | Nuclear Regulatory Commission",
      "url": "https://www.nrc.gov/reactors/operating/licensing/renewal/subsequent-license-renewal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "nrc.gov",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=nrc.gov",
        "site_name": "NRC"
      },
      "is_missing": false,
      "text": "The SRP-SLR assists reviewers in verifying that the applicant has met the requirements of Title 10 of the Code of Federal Regulations (10 CFR) Part 54, &quot;Requirements for Renewal of Operating Licenses for Nuclear Power Plants.&quot; The SRP-SLR ensures the quality and uniformity of NRC staff reviews and establishes a well-defined base from which to evaluate applicant programs and activities for the subsequent period of extended operation. The GALL-SLR Report and SRP-SLR were issued as NUREG-2192 and NUREG-2191, respectively, in July 2017. For the environmental review, in accordance with 10 CFR 51.95(c), the NRC staff documents its environmental review of each SLRA and publishes it as a plant-specific supplement to NUREG‑1437, “Generic Environmental Impact Statement for License Renewal of Nuclear Power Plants” (License Renewal GEIS, or LR GEIS). On February 24, 2022, the Commission issued three memoranda and orders that addressed the NRC staff’s environmental reviews in SLR proceedings: CLI 2\n\nThe SRP-SLR assists reviewers in verifying that the applicant has met the requirements of Title 10 of the Code of Federal Regulations (10 CFR) Part 54, \"Requirements for Renewal of Operating Licenses for Nuclear Power Plants.\" The SRP-SLR ensures the quality and uniformity of NRC staff reviews and establishes a well-defined base from which to evaluate applicant programs and activities for the subsequent period of extended operation. The GALL-SLR Report and SRP-SLR were issued as NUREG-2192 and NUREG-2191, respectively, in July 2017. For the environmental review, in accordance with 10 CFR 51.95(c), the NRC staff documents its environmental review of each SLRA and publishes it as a plant-specific supplement to NUREG‑1437, “Generic Environmental Impact Statement for License Renewal of Nuclear Power Plants” (License Renewal GEIS, or LR GEIS). On February 24, 2022, the Commission issued three memoranda and orders that addressed the NRC staff’s environmental reviews in SLR proceedings: CLI 2\n\nIn these decisions, the Commission concluded that the 2013 LR GEIS, on which the NRC staff had relied, in part, to meet its obligations under 10 CFR Part 51 and National Environmental Policy Act for the environmental reviews for the affected nuclear power plant SLRAs, did not consider SLR: ... St. Lucie, Units, 1 and 2. The plant-specific pages provide additional detail on the affected environmental reviews and its corresponding revised review schedules. In August 2024, the staff issued NUREG-1437, \"Generic Environmental Impact Statement for License Renewal of Nuclear Plants,\" Revision 2, Volumes 1-3 (ML24086A526, ML24086A527, and ML24086A528) to fully account for one term of SLR. To subscribe to all outgoing public correspondence for a specific license renewal application by e-mail, simply go to our Operating Reactors Correspondence page enter your email address, name, select the plant(s) of interest and Subscribe.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.nrc.gov/reactors/operating/licensing/renewal/subsequent-license-renewal",
        "search_provider": "anthropic"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Good data. Let me compile a clear answer with proper citations.

</details>

The lifespan of a nuclear power plant depends on the regulatory framework and whether license extensions are pursued. Here's how it breaks down, primarily using the U.S. as the reference case (which has the world's largest reactor fleet and the most documented renewal process):

---

**Original Design License: 40 years**

When nuclear power plants are built, the U.S. Nuclear Regulatory Commission (NRC) has the authority to issue initial operating licenses for a period of 40 years. Importantly, the NRC says economic and antitrust considerations — not limitations of nuclear technology — determined the original 40-year license term.

---

**First License Renewal: up to 60 years**

The NRC allows licenses to be renewed for up to 20 years with every renewal application, as long as operators prove that the effects of aging on certain plant structures and components will be adequately managed. About 90% of U.S. plants have already renewed their licenses once, extending their operation to 60 years.

---

**Subsequent License Renewal (SLR): up to 80 years**

The NRC may subsequently grant a third 20-year operating license extension for a total operational life of 80 years. Research from the U.S. Department of Energy (DOE) and the Electric Power Research Institute (EPRI) shows no technical reason why nuclear power plants can't operate for 80 years or more.

---

**The frontier: 100 years?**

80 years may not be the end of the line. There are conversations occurring at institutions like EPRI and the NRC about what a 100-year extension would look like. The NRC first publicly addressed the possibility of licensing nuclear plants for 100 years of operation at a meeting in January 2021, asking in a request for comments whether it should begin considering the potential technical issues and developing guidance documents to support license renewal to authorize operation for up to 100 years.

---

**Current U.S. fleet snapshot (as of mid-2024)**

The average age of U.S. commercial nuclear power reactors that were operational as of April 30, 2024 is about 42 years. The oldest operating reactor is Nine Mile Point Unit 1 in New York State, which entered commercial service in December 1969.

---

**Summary table**

| Stage | Duration | Status |
|---|---|---|
| Original license | 40 years | Standard for all new plants |
| First renewal | +20 years (60 total) | ~90% of U.S. fleet |
| Subsequent renewal (SLR) | +20 years (80 total) | Actively pursued |
| Speculative extension | +20 years (100 total) | Under early discussion |

**A practical caveat:** regulatory approval is necessary but not sufficient — early shutdowns do occur. 13 reactors have retired since 2013 due to challenging market conditions, and an additional seven units were slated to shut down by 2025, well before their licensed lifespans expired. Economic viability is therefore an independent constraint on actual operational lifespan, separate from technical or regulatory limits.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d416b-1e2c-7b3e-a51f-5f173efceee9",
  "updated_at": "2026-03-31T01:04:16.419525Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d416b-1e2c-718e-b692-4b454905001f"
}
```

</details>
