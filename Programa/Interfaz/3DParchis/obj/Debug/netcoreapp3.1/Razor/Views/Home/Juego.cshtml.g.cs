#pragma checksum "G:\Mi unidad\TEC\2021\Segundo semestre\Lenguajes\Proyectos\Proyecto 4\Proyecto 4 lenguajes\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\Juego.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ae5b392eaf3ec8b909ebc2378cb913ed988e14a1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Juego), @"mvc.1.0.view", @"/Views/Home/Juego.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "G:\Mi unidad\TEC\2021\Segundo semestre\Lenguajes\Proyectos\Proyecto 4\Proyecto 4 lenguajes\3D-Parchis\Programa\Interfaz\3DParchis\Views\_ViewImports.cshtml"
using _3DParchis;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "G:\Mi unidad\TEC\2021\Segundo semestre\Lenguajes\Proyectos\Proyecto 4\Proyecto 4 lenguajes\3D-Parchis\Programa\Interfaz\3DParchis\Views\_ViewImports.cshtml"
using _3DParchis.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ae5b392eaf3ec8b909ebc2378cb913ed988e14a1", @"/Views/Home/Juego.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0e78845849a1f0cb1ba165bd033d8d5feabfe1c3", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Juego : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaAmarilla.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaVerde.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/centro.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaAzul.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaRoja.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "G:\Mi unidad\TEC\2021\Segundo semestre\Lenguajes\Proyectos\Proyecto 4\Proyecto 4 lenguajes\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\Juego.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "G:\Mi unidad\TEC\2021\Segundo semestre\Lenguajes\Proyectos\Proyecto 4\Proyecto 4 lenguajes\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\Juego.cshtml"
  
    Layout = "_Layout";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"

<style>

    table {
        margin: auto;
        background-color: white;
        text-align: center;
    }

    td {
        width: 20px;
        height: 20px;
    }

    h1 {
        text-align: center;
        /*color: white;*/
    }

    .amarillo {
        background-color: yellow;
        text-align: center;
    }

    .verde {
        background-color: green;
        text-align: center;
    }

    .azul {
        background-color: blue;
        text-align: center;
    }

    .rojo {
        background-color: red;
        text-align: center;
    }

    .gris {
        background-color: gray;
        text-align: center;
    }

    #vacio {
        background-color: black;
    }

    img {
        width: 200px;
        height: 200px;
    }
</style>
<div class=""text-center"">
    <h3 class=""display-4""><b>Juego {Identificacion}</b></h3>
");
            WriteLiteral(@"</div>

<div class=""container"" id=""datoCreacion"">
    <h4>Jugador:</h4>
    <div class=""row"">
        <div class=""col"">
            <p><b>Turno de: </b></p>
        </div>
    </div>

</div>

<table border=""1px"" id=""tableroPrincipal"" >
    <!-- 1 -->
    <tr>
        <td class=""amarillo"" colspan=""7"" rowspan=""7"">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "ae5b392eaf3ec8b909ebc2378cb913ed988e14a16938", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("</td>\r\n        <td colspan=\"2\">1</td>\r\n        <td class=\"gris\" colspan=\"2\">68</td>\r\n        <td colspan=\"2\">67</td>\r\n        <td class=\"verde\" colspan=\"7\" rowspan=\"7\">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "ae5b392eaf3ec8b909ebc2378cb913ed988e14a18154", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"</td>
    </tr>
    <!-- 2 -->
    <tr>
        <td colspan=""2"">2</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">66</td>
    </tr>
    <!-- 3 -->
    <tr>
        <td colspan=""2"">3</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">65</td>
    </tr>
    <!-- 4 -->
    <tr>
        <td colspan=""2"">4</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">64</td>
    </tr>
    <!-- 5 -->
    <tr>
        <td class=""amarillo"" colspan=""2"">5</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"" class=""gris"">63</td>
    </tr>
    <!-- 6 -->
    <tr>
        <td colspan=""2"">6</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">62</td>
    </tr>
    <!-- 7 -->
    <tr>
        <td colspan=""2"">7</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">61</td>
    </tr>
    <!-- 8 -->
    <!-- Primera línea justo debajo de los grandes -->");
            WriteLiteral(@"
    <tr>
        <td rowspan=""2"">16</td>
        <td rowspan=""2"">15</td>
        <td rowspan=""2"">14</td>
        <td rowspan=""2"">13</td>
        <td rowspan=""2"" class=""gris"">12</td>
        <td rowspan=""2"">11</td>
        <td rowspan=""2"">10</td>
        <td id=""vacio""></td>
        <td>8</td>
        <td>-</td>
        <td>-</td>
        <td>60</td>
        <td id=""vacio""></td>
        <td rowspan=""2"">58</td>
        <td rowspan=""2"">57</td>
        <td class=""verde"" rowspan=""2"">56</td>
        <td rowspan=""2"">55</td>
        <td rowspan=""2"">54</td>
        <td rowspan=""2"">53</td>
        <td rowspan=""2"">52</td>
    </tr>
    <!-- 9 -->
    <tr>
        <td>9</td>
        <td colspan=""4"" rowspan=""4"">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "ae5b392eaf3ec8b909ebc2378cb913ed988e14a111064", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"</td>
        <td>59</td>
    </tr>
    <!-- 10 -->
    <tr>
        <td class=""gris"" rowspan=""2"">17</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td>|</td>
        <td>|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""gris"" rowspan=""2"">51</td>
    </tr>
    <!-- 11 -->
    <tr>
        <td>|</td>
        <td>|</td>
    </tr>
    <!-- 12 -->
    <tr>
        <td rowspan=""2"">18</td>
        <td rowspan=""2"">19</td>
        <td rowspan=""2"">20</td>
        <td rowspan=""2"">21</td>
        <td class=""azul"" rowspan");
            WriteLiteral(@"=""2"">22</td>
        <td rowspan=""2"">23</td>
        <td rowspan=""2"">24</td>
        <td>25</td>
        <td>43</td>
        <td rowspan=""2"">44</td>
        <td rowspan=""2"">45</td>
        <td rowspan=""2"" class=""gris"">46</td>
        <td rowspan=""2"">47</td>
        <td rowspan=""2"">48</td>
        <td rowspan=""2"">49</td>
        <td rowspan=""2"">50</td>
    </tr>
    <!-- 13 -->
    <tr>
        <td id=""vacio""></td>
        <td>26</td>
        <td>-</td>
        <td>-</td>
        <td>42</td>
        <td id=""vacio""></td>
    </tr>
    <!-- 14 -->
    <tr>
        <td class=""azul"" colspan=""7"" rowspan=""7"">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "ae5b392eaf3ec8b909ebc2378cb913ed988e14a113879", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("</td>\r\n        <td colspan=\"2\">27</td>\r\n        <td class=\"rojo\" colspan=\"2\">-</td>\r\n        <td colspan=\"2\">41</td>\r\n        <td class=\"rojo\" colspan=\"7\" rowspan=\"7\">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "ae5b392eaf3ec8b909ebc2378cb913ed988e14a115095", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"</td>
    </tr>
    <!-- 15 -->
    <tr>
        <td colspan=""2"">28</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">40</td>
    </tr>
    <!-- 16 -->
    <tr>
        <td colspan=""2"" class=""gris"">29</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td class=""rojo"" colspan=""2"">39</td>
    </tr>
    <!-- 17 -->
    <tr>
        <td colspan=""2"">30</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">38</td>
    </tr>
    <!-- 18 -->
    <tr>
        <td colspan=""2"">31</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">37</td>
    </tr>
    <!-- 19 -->
    <tr>
        <td colspan=""2"">32</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">36</td>
    </tr>
    <!-- 20 -->
    <tr>
        <td colspan=""2"">33</td>
        <td class=""gris"" colspan=""2"">34</td>
        <td colspan=""2"">35</td>
    </tr>

</table>

");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
